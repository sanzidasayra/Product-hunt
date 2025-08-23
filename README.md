# MyShop - Next.js 15 E-commerce Demo

## 🌐 Live Demo
🔗 [Visit MyShop](https://product-hunt-ruby.vercel.app/)

## 🖼 Screenshots
![Landing Page](https://i.ibb.co.com/C3vyhWbP/Screenshot-2025-08-23-060423.png)



## Short Project Description
MyShop is a simple e-commerce demo application built with Next.js 15 (App Router). It allows users to browse products, view product details, and manage products after logging in using NextAuth.js authentication. The app includes public pages (landing, product list, product details) and a protected dashboard for adding new products.

---

## Core Features

1. **Landing Page (`/`)**  
   - Sections: Navbar, Hero, Product Highlights, Footer  
   - Navigation links to Login and Products pages  
   - Publicly accessible  

2. **Login Page (`/login`)**  
   - NextAuth.js authentication (Google/social login or credentials)  
   - Redirects to `/products` after successful login  

3. **Product List Page (`/products`)**  
   - Publicly accessible  
   - Displays list of products with name, description, price, and a "Details" button  

4. **Product Details Page (`/products/[id]`)**  
   - Shows full details of a single product  
   - Publicly accessible  

5. **Protected Add Product Page (`/dashboard/add-product`)**  
   - Only accessible to authenticated users  
   - Form to add a new product to the database  
   - Redirects unauthenticated users to login  

---

## Optional Enhancements
- Loading spinner when submitting forms  
- Toast notifications on successful product addition  
- Light/Dark theme toggle  

---

## Technologies Used
- **Next.js 15** (App Router)  
- **NextAuth.js** for authentication  
- **MongoDB** (or any mock backend) for storing product data  
- Tailwind CSS for styling  
- Route Handlers (`/api`) for backend operations  

---

