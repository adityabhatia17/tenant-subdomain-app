# Tenant Subdomain App

## Description

The Tenant Subdomain App is a web application that allows users to create customized websites for two different tenants using a single template. This application is hosted on the same server and retrieves data in JSON format through an API built with Next.js.

## Getting Started

To get started with this project, follow these steps after you clone this repository:

### 1. Installation

First, navigate to the project directory and install all the required libraries using npm:

```bash
npm install
```

### 2. Configuration

You will need to add the subdomains to your computer's `etc/hosts` file to test the subdomain functionality locally. Here's how to do it:

1. **Windows:**

   - Open Notepad or any text editor with administrator privileges.
   - Go to `C:\Windows\System32\drivers\etc\hosts`.
   - Open the `hosts` file.
   - Add the following lines to the end of the file, replacing `subdomain1.example.com` and `subdomain2.example.com` with your desired subdomains and IP address (usually `127.0.0.1` for localhost):

     ```plaintext
     127.0.0.1 tenant1.localhost
     127.0.0.1 tenant2.localhost
     ```

   - Save the file.

2. **macOS / Linux:**

   - Open a terminal and use a text editor with superuser privileges (e.g., `sudo nano`) to edit the hosts file:

     ```bash
     sudo nano /etc/hosts
     ```

   - Add the same lines as in the Windows example:

     ```plaintext
     127.0.0.1 tenant1.localhost
     127.0.0.1 tenant2.localhost
     ```

   - Save the file and exit the text editor.

Once you've completed the above steps, you can proceed with running the web application and accessing it using the specified subdomains.

### 3. Run the app
```bash
npm run dev
```
Once the server starts, Visit **tenant1.localhost:3000** and **tenant2.localhost:3000**
