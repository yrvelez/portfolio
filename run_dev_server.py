#!/usr/bin/env python3
"""
Simple development server launcher for the Yamil Velez Portfolio.
This is an alternative to using npm run dev, useful for Python developers.
"""

import os
import subprocess
import webbrowser
import time
import sys

def main():
    print("Yamil Velez Portfolio Development Server Launcher")
    print("=" * 50)
    
    # Check if npm is installed
    try:
        subprocess.run(["npm", "--version"], check=True, capture_output=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("Error: npm is not installed or not in PATH.")
        print("Please install Node.js and npm to continue.")
        sys.exit(1)
    
    # Check if dependencies are installed
    if not os.path.isdir("node_modules"):
        print("Installing dependencies...")
        subprocess.run(["npm", "install"], check=True)
    
    # Run the development server
    print("Starting development server...")
    dev_server = subprocess.Popen(["npm", "run", "dev"])
    
    # Wait for the server to start
    time.sleep(3)
    
    # Open browser
    print("Opening portfolio in your default browser...")
    webbrowser.open("http://localhost:3000")
    
    print("\nPress Ctrl+C to stop the server.\n")
    
    try:
        # Keep the script running until interrupted
        dev_server.wait()
    except KeyboardInterrupt:
        print("\nStopping server...")
        dev_server.terminate()
        dev_server.wait()
        print("Server stopped.")

if __name__ == "__main__":
    main() 