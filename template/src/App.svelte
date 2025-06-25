<script lang="ts">
  import { LoginForm, auth } from "smcgateway-sv";
  import Hello from "lib/Hello.svelte"
</script>

<div class="container mt-3">
  {#if auth.user}
    <Hello></Hello>
    <button class="btn btn-secondary" onclick={auth.logout}>Logout</button>
  {:else}
    <LoginForm></LoginForm>
  {/if}
</div>
