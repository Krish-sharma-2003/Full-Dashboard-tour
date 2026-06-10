
# ReguCompliance eCTD – AI Assisted Regulatory Dashboard

An enterprise-grade regulatory compliance dashboard designed for eCTD submission workflows. Built with React + FastAPI + Supabase.

---

## 🗂 Project Structure

```
Full-Dashboard-tour-main/
├── backend/          # FastAPI Python backend
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── dependencies.py
│   │   ├── routers/
│   │   │   ├── projects.py
│   │   │   └── documents.py
│   │   ├── services/
│   │   │   ├── project_service.py
│   │   │   └── document_service.py
│   │   ├── models/
│   │   │   ├── project.py
│   │   │   └── document.py
│   │   ├── db/
│   │   │   └── client.py
│   │   └── lib/
│   │       └── storage.py
│   ├── requirements.txt
│   └── .env.example
├── src/              # React + Vite frontend
│   ├── pages/
│   ├── components/
│   ├── lib/
│   │   └── api.ts    # Backend API client
│   └── routes/
├── package.json
└── vite.config.ts
```

---

## ⚙️ Prerequisites

Make sure you have these installed:

| Tool | Version | Check |
|------|---------|-------|
| Node.js | >= 18 | `node --version` |
| Python | >= 3.10 | `python --version` |
| pip | Latest | `pip --version` |

---

## 🗄️ Step 1 — Supabase Setup

### 1.1 Create a Supabase Project
Go to [https://supabase.com/dashboard](https://supabase.com/dashboard) → New Project.

### 1.2 Create the `projects` Table
In **SQL Editor**, run:

```sql
CREATE TABLE projects (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name             TEXT NOT NULL,
  description      TEXT,
  region           TEXT NOT NULL,
  organization_id  TEXT NOT NULL,
  status           TEXT NOT NULL DEFAULT 'IN_PROGRESS',
  created_by       TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 1.3 Create the `documents` Table
```sql
CREATE TABLE documents (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id   TEXT NOT NULL,
  file_name    TEXT NOT NULL,
  file_url     TEXT NOT NULL,
  uploaded_by  TEXT NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 1.4 Create the Storage Bucket
Go to **Storage → New Bucket**:
- Name: `documents`
- Public: ✅ **Yes** (required for public file URLs)

### 1.5 Get Your API Keys
Go to **Settings → API** and copy:
- **Project URL** → `https://xxxx.supabase.co`
- **Secret key** (`sb_secret_...`) → service role key

---

## 🐍 Step 2 — Backend Setup

### 2.1 Create the `.env` file
Inside the `backend/` folder, create a file named `.env`:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sb_secret_your_key_here
ANTHROPIC_API_KEY=sk-dummy
REDIS_URL=redis://localhost:6379/0
APP_NAME="AI-eCTD Platform API"
DEBUG=True
```

> Replace `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` with your actual values.
> `ANTHROPIC_API_KEY` can be set to `sk-dummy` — it is not used by any current API.

### 2.2 Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
pip install supabase --upgrade
pip install "websockets>=13.0,<16.0"
```

### 2.3 Start the Backend Server

```bash
cd backend
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

✅ You should see:
```
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:8000
```

---

## ⚛️ Step 3 — Frontend Setup

Open a **new terminal** (keep the backend running):

### 3.1 Install Node Dependencies

```bash
cd Full-Dashboard-tour-main   # root of the project (where package.json is)
npm install
```

### 3.2 Start the Frontend Dev Server

```bash
npm run dev
```

✅ You should see:
```
VITE v7.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

---

## 🌐 Running URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://127.0.0.1:8000 |
| Swagger UI (API Docs) | http://127.0.0.1:8000/docs |
| ReDoc | http://127.0.0.1:8000/redoc |

---

## 🧪 API Testing via Swagger UI

Open **http://127.0.0.1:8000/docs** in your browser.

---

### API 1 — Health Check

**`GET /`**

1. Click `GET /` → **Try it out** → **Execute**
2. Expected response:
```json
{ "msg": "API working" }
```

---

### API 2 — Create a Project

**`POST /projects/`**

1. Click `POST /projects/` → **Try it out**
2. Paste this into the request body:
```json
{
  "name": "Oncology Submission 2026",
  "description": "Phase III regulatory filing",
  "region": "US (FDA)",
  "organization_id": "test_org"
}
```
3. Click **Execute**
4. Expected response `200 OK`:
```json
{
  "id": "uuid-here",
  "name": "Oncology Submission 2026",
  "region": "US (FDA)",
  "organization_id": "test_org",
  "status": "IN_PROGRESS",
  "created_at": "...",
  "updated_at": "..."
}
```
> 📌 **Save the `id`** from the response — you'll need it for APIs 4 & 5.

---

### API 3 — List Projects

**`GET /projects/`**

1. Click `GET /projects/` → **Try it out**
2. Set `org_id` = `test_org`
3. Click **Execute**
4. Expected response: array of projects you've created

---

### API 4 — Upload a Document

**`POST /documents/upload`**

1. Click `POST /documents/upload` → **Try it out**
2. In the `file` field → click **Choose File** → pick any PDF or DOCX
3. In the `project_id` field → paste the `id` from API 2
4. Click **Execute**
5. Expected response `200 OK`:
```json
{
  "id": "uuid",
  "project_id": "your-project-id",
  "file_name": "yourfile.pdf",
  "file_url": "https://xxxx.supabase.co/storage/v1/object/public/documents/...",
  "uploaded_by": "test_user",
  "created_at": "..."
}
```

---

### API 5 — Get Documents for a Project

**`GET /documents/{project_id}`**

1. Click `GET /documents/{project_id}` → **Try it out**
2. In `project_id` → paste the `id` from API 2
3. Click **Execute**
4. Expected response: array of uploaded documents

---

## 🖥️ API Testing via Frontend

Make sure **both** the frontend (`localhost:5173`) and backend (`localhost:8000`) are running.

---

### Test 1 — Load Projects from Backend (GET /projects/)

1. Open **http://localhost:5173**
2. The dashboard loads — projects from Supabase appear below the default mock projects
3. Check browser DevTools → **Console** → look for: `API: Fetching projects for org: test_org`

---

### Test 2 — Create a Project (POST /projects/)

1. On the Dashboard, click **"Create Project"** button (top right)
2. Fill in:
   - Project Name: `Test Project Alpha`
   - Company Name: `My Pharma Co`
   - Region: `US (FDA)`
   - Clinical Phase: `Phase III`
3. Click **"Create Project"**
4. The modal closes and the **project list refreshes automatically** — your new project appears
5. Check Supabase → **Table Editor → projects** → row should be there

---

### Test 3 — Upload a Document (POST /documents/upload)

1. On the Dashboard, click **"Upload Document"** button (top right)
2. In the modal:
   - Drag & drop or browse for a PDF/DOCX file
   - Select a project from the **"Target Project"** dropdown
3. Click **"Complete Upload ✓"**
4. Success animation plays → modal closes
5. Check Supabase → **Table Editor → documents** → row should be there
6. Check Supabase → **Storage → documents** bucket → file should be there

---

### Test 4 — View Documents in Workspace (GET /documents/{project_id})

1. On the Dashboard, click any **project card**
2. URL changes to `/workspace?project_id=<id>`
3. In the **Section Documents** panel → your uploaded documents appear with:
   - File name (clickable link)
   - Uploaded by
   - Date
   - **View ↗** link (opens file in new tab)

---

## 🔌 Backend API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `POST` | `/projects/` | Create a new project |
| `GET` | `/projects/?org_id=<id>` | List all projects for an org |
| `POST` | `/documents/upload` | Upload a document file |
| `GET` | `/documents/{project_id}` | Get all documents for a project |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, TypeScript, TailwindCSS |
| UI Components | Radix UI, Lucide Icons, shadcn/ui |
| Routing | React Router v6 |
| Backend | FastAPI, Python 3.10, Uvicorn |
| Database | Supabase (PostgreSQL) |
| File Storage | Supabase Storage |
| API Client | Native `fetch` |

---

## 📁 Frontend Routes

| Route | Page |
|-------|------|
| `/` | Project Dashboard |
| `/workspace?project_id=<id>` | Clinical Overview + Document Manager |
| `/compliance-review` | Compliance Review Engine |
| `/submissions/readiness` | Module Readiness Dashboard |
| `/submissions/build` | eCTD Build & Export |
| `/ai-processing` | AI Processing Flow |

---

