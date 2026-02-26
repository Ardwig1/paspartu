import shutil
import os

source_dir = r"C:\Users\Mustafa Yağız ÜNAL\.gemini\antigravity\brain\b3e8ed1f-82e9-4c33-97a7-865aa23702f8"
dest_dir = r"c:\Users\Mustafa Yağız ÜNAL\.gemini\antigravity\scratch\paspartu\public\assets"

# Based on find_by_name results, these seem to be the new unique files
files_map = {
    "media__1771274288372.png": "gallery-new-6.png",
    "media__1771275609182.png": "gallery-new-7.png",
    "media__1771275916460.jpg": "gallery-new-8.jpg"
}

os.makedirs(dest_dir, exist_ok=True)

for src_name, dest_name in files_map.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    try:
        if os.path.exists(src_path):
            shutil.copy2(src_path, dest_path)
            print(f"Copied {src_name} to {dest_name}")
        else:
            print(f"Source file not found: {src_path}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
