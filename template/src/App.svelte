<script lang="ts">
  import Router from "svelte-spa-router";
  import NavBar from "./lib/Navbar.svelte";
  import { LoginForm, auth } from "smcgateway-sv";
  import Hello from "./lib/Hello.svelte";

  const routes = {
    "/hello": Hello,
    // Catch all, must be at end
    "*": Hello,
  };
</script>

{#if auth.user}
  <NavBar></NavBar>
  <div class="container-fluid" style="margin-top: 60px;">
    <Router {routes} />
  </div>
{:else}
  <div class="form-signin">
    <LoginForm>
      <h3>Login</h3>
    </LoginForm>
  </div>
{/if}

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding-top: 50px;
    margin: auto;
  }
</style>
