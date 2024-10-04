// import { Logo } from "~/assets/Logo"; // Replace with your logo import

export default function Header() {
  return (
    <header class="bg-pastelgreen-200 text-pastelgreen-900 p-4">
      <div class="container max-w-2xl mx-auto flex justify-between items-center">
        {/* <Logo /> */}
        {/* Assuming Logo is a component that renders your logo */}
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="/" class="hover:text-pastelgreen-500">홈</a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
