import os
from PIL import Image

def compress_images(base_dir: str, output_dir: str, quality: int = 100, max_size: tuple = (1920, 1080)):
    supported_formats = ('.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff')

    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.lower().endswith(supported_formats):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, base_dir)

                # Convert extension to .webp for output
                output_rel_path = os.path.splitext(rel_path)[0] + '.webp'
                output_path = os.path.join(output_dir, output_rel_path)

                os.makedirs(os.path.dirname(output_path), exist_ok=True)

                try:
                    with Image.open(file_path) as img:
                        img = img.convert("RGBA")  

                        # Resize if needed
                        img.thumbnail(max_size, Image.LANCZOS)

                        # Save as optimized webp
                        img.save(
                            output_path,
                            format='WEBP',
                            quality=quality,
                            method=6,  # slowest but best compression
                            optimize=True
                        )
                        print(f"Compressed: {file_path} → {output_path}")
                except Exception as e:
                    print(f"Failed to process {file_path}: {e}")
