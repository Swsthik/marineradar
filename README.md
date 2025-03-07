# Zustand Starter Project

This is a simple starter project built with **Next.js 14.2** and **Zustand**. It provides a foundational setup to help you quickly get started with state management in Next.js applications. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/otcldhhriyjpsbsciax0.png)

## Features

- **State Management**: Uses [Zustand](https://github.com/pmndrs/zustand) for lightweight and scalable state management.
- **Local Storage Persistence**: Includes the capability to persist state to `localStorage`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MiladJoodi/Zustand_Starter_Project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Zustand_Starter_Project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

Here's an overview of the project structure:

```
.
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── store
│       ├── counterStore.ts
│       ├── index.ts
│       └── userStore.ts
├── tailwind.config.ts
└── tsconfig.json
```

### Explanation of Folders and Files

- **next.config.mjs**: Configuration file for Next.js.
- **next-env.d.ts**: TypeScript declaration file for Next.js.
- **package.json**: Contains project metadata and dependencies.
- **package-lock.json**: Ensures consistent dependency installation.
- **postcss.config.mjs**: Configuration for PostCSS, used with Tailwind CSS.
- **README.md**: This file, providing an overview and instructions for the project.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.

### src Folder

- **app**: Contains the main application components.
  - **about/page.tsx**: The about page component.
  - **contact/page.tsx**: The contact page component.
  - **favicon.ico**: The favicon for the application.
  - **fonts**: Contains custom font files.
  - **globals.css**: Global CSS styles for the application.
  - **layout.tsx**: The main layout component for the application.
  - **page.tsx**: The main page component.
- **store**: Contains Zustand store files for state management.
  - **counterStore.ts**: Zustand store for managing a counter state.
  - **index.ts**: Exports all Zustand stores.
  - **userStore.ts**: Zustand store for managing user state.

### Adding New Pages and Features

To add a new page, create a new folder inside the `src/app` directory with the desired page name and then add a `page.tsx` file inside it. For example, to add a new "services" page:

1. Create a new folder `services` inside `src/app`:

   ```
   src/app/services
   ```

2. Add a `page.tsx` file inside the `services` folder:

   ```tsx
   // src/app/services/page.tsx
   import React from 'react';

   const ServicesPage = () => {
     return (
       <div>
         <h1>Our Services</h1>
         <p>Details about services offered.</p>
       </div>
     );
   };

   export default ServicesPage;
   ```

### Using Zustand for State Management

Zustand is used for state management in this project. You can find Zustand store files inside the `src/store` directory. To create a new store, add a new file in the `store` directory. For example, to create a new product store:

1. Create a new file `productStore.ts` inside `src/store`:

   ```typescript
   // src/store/productStore.ts
   import create from 'zustand';

   interface Product {
     id: number;
     name: string;
     price: number;
   }

   interface ProductStore {
     products: Product[];
     addProduct: (product: Product) => void;
   }

   const useProductStore = create<ProductStore>((set) => ({
     products: [],
     addProduct: (product) => set((state) => ({
       products: [...state.products, product],
     })),
   }));

   export default useProductStore;
   ```

2. Use the new store in your components:

   ```tsx
   // src/app/page.tsx
   import React from 'react';
   import useProductStore from '../store/productStore';

   const HomePage = () => {
     const products = useProductStore((state) => state.products);
     const addProduct = useProductStore((state) => state.addProduct);

     const handleAddProduct = () => {
       addProduct({ id: 1, name: 'Sample Product', price: 99.99 });
     };

     return (
       <div>
         <h1>Home Page</h1>
         <button onClick={handleAddProduct}>Add Product</button>
         <ul>
           {products.map((product) => (
             <li key={product.id}>{product.name} - ${product.price}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default HomePage;
   ```

## Contribution
Feel free to open issues or submit pull requests for any improvements or suggestions. Contributions are always welcome!

## Repository
Check out the project on GitHub:
[Zustand Starter Project](https://github.com/MiladJoodi/Zustand_Starter_Project)

---

Happy coding! 🚀
