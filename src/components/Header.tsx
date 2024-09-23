// import { Logo } from "~/assets/Logo"; // Replace with your logo import

export default function Header() {
  return (
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        {/* <Logo /> */}
        {/* Assuming Logo is a component that renders your logo */}
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="/" class="hover:text-blue-500">Home</a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
