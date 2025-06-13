from img_compress import compress_images

# build.py must be called after the quartz build process is started. 
compress_images("public/images/reg", "public/images/low")
