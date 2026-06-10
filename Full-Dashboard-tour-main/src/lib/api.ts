const BASE_URL = "http://127.0.0.1:8000";

export const api = {
  /**
   * Create a new project
   */
  async createProject(data: {
    name: string;
    description?: string;
    region: string;
    organization_id: string;
  }) {
    console.log("API: Creating project...", data);
    const response = await fetch(`${BASE_URL}/projects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Failed to create project");
    }

    return response.json();
  },

  /**
   * Get all projects for an organization
   */
  async getProjects(orgId: string = "test_org") {
    console.log(`API: Fetching projects for org: ${orgId}`);
    const response = await fetch(`${BASE_URL}/projects/?org_id=${orgId}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Failed to fetch projects");
    }

    return response.json();
  },

  /**
   * Upload a document to a project
   */
  async uploadDocument(file: File, projectId: string) {
    console.log(`API: Uploading document to project: ${projectId}`, file.name);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("project_id", projectId);

    const response = await fetch(`${BASE_URL}/documents/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Failed to upload document");
    }

    return response.json();
  },

  /**
   * Get all documents for a specific project
   */
  async getDocuments(projectId: string) {
    console.log(`API: Fetching documents for project: ${projectId}`);
    const response = await fetch(`${BASE_URL}/documents/${projectId}`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Failed to fetch documents");
    }

    return response.json();
  },
};
