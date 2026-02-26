import hashlib
import os
import shutil

brain_dir = r"C:\Users\Mustafa Yağız ÜNAL\.gemini\antigravity\brain\b3e8ed1f-82e9-4c33-97a7-865aa23702f8"
dest_dir = r"c:\Users\Mustafa Yağız ÜNAL\.gemini\antigravity\scratch\paspartu\public\assets"

files_to_check = [
    "media__1771276288357.jpg",
    "media__1771276261763.jpg",
    "media__1771276261735.jpg",
    "media__1771276261734.jpg",
    "media__1771275916461.jpg",
    "media__1771275916460.jpg",
    "media__1771275609182.png", # Potential screenshot?
]

def get_file_hash(path):
    hash_md5 = hashlib.md5()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

unique_files = {}
for fname in files_to_check:
    fpath = os.path.join(brain_dir, fname)
    if os.path.exists(fpath):
        fhash = get_file_hash(fpath)
        if fhash not in unique_files:
            unique_files[fhash] = fname
        else:
            print(f"Duplicate content: {fname} is same as {unique_files[fhash]}")

print("\nUnique files found:")
sorted_files = sorted(unique_files.values(), reverse=True) # Sort by name (timestamp) descending
count = 0
for fname in sorted_files:
    print(fname)
    count += 1
    # Copy to destination as gallery-final-X
    # We want 6 total.
    if count <= 6:
        dest_name = f"gallery-final-{count}.{fname.split('.')[-1]}"
        shutil.copy2(os.path.join(brain_dir, fname), os.path.join(dest_dir, dest_name))
        print(f"  -> Copied to {dest_name}")

print(f"\nTotal unique files processed: {len(unique_files)}")
