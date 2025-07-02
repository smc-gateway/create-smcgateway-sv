<script lang="ts">
    import active from "svelte-spa-router/active";
    import { auth } from "smcgateway-sv";
</script>

<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#/">Admin</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a
                        class="nav-link"
                        use:active
                        aria-current="page"
                        href="#/hello">Hello</a
                    >
                </li>
                {#if auth.isAdmin}
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            use:active
                            aria-current="page"
                            href="#/">Admin only</a
                        >
                    </li>
                {/if}
            </ul>
            <a class="nav-link" use:active href="#/" onclick={auth.logout}
                >Logout</a
            >
        </div>
    </div>
</nav>
