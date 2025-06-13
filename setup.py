from setuptools import setup, py_modules

setup(
    name='img-compress',
    version='0.1.0',
    py_modules=['img_compress'],  # <-- use module, not package
    install_requires=[
        'Pillow>=10.0.0',
    ],
    entry_points={
        'console_scripts': [
            'compress-images=img_compress:compress_images',
        ],
    },
)
