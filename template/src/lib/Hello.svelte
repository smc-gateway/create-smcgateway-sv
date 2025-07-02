<script lang="ts">
  import { auth } from "smcgateway-sv";
</script>

<div class="container">
  <h3>Hello {auth.user?.name}</h3>
</div>
