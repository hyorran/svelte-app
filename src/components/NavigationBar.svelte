<script>

  import { page } from "$app/stores";
</script>

<nav class="p-3 border-gray-200 rounded bg-gray-50">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6">
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul
        class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
        <li>
          <a
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            class:active={$page.url.pathname === "/"}
            href="/">Home</a>
        </li>
        <li>
          <a
            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            class:active={$page.url.pathname === "/settings"}
            href="/settings">Settings</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style lang="postcss">
    a.active {
        color: #1d4ed8;
    }
</style>