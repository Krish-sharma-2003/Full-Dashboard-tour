import sys
import os

# Add the current directory to sys.path to resolve imports relative to 'backend'
sys.path.append(os.getcwd())

try:
    print("Checking app.lib.storage...")
    from app.lib import storage
    print("OK")

    print("Checking app.models.document...")
    from app.models import document
    print("OK")

    print("Checking app.services.document_service...")
    from app.services import document_service
    print("OK")

    print("Checking app.routers.documents...")
    from app.routers import documents
    print("OK")

    print("Checking app.main...")
    from app.main import app
    print("OK")

    print("\nAll backend components imported successfully.")
    
except ImportError as e:
    print(f"\nImport Error: {e}")
    sys.exit(1)
except Exception as e:
    print(f"\nError: {e}")
    sys.exit(1)
