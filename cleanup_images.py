import glob
import os

assets_dir = r"c:\Users\Mustafa Yağız ÜNAL\.gemini\antigravity\scratch\paspartu\public\assets"

# Delete gallery-new-* files
patterns = ["gallery-new-*.png", "gallery-new-*.jpg"]

for pattern in patterns:
    search_path = os.path.join(assets_dir, pattern)
    files = glob.glob(search_path)
    for f in files:
        try:
            os.remove(f)
            print(f"Deleted: {f}")
        except Exception as e:
            print(f"Error deleting {f}: {e}")
