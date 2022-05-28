<template>
  <header class="headerMain">
        <div class="container">
            <img class="headerMain-logo" src="../../images/logo.jpeg" alt="">

			<nav class="headerMain-nav">
                <router-link to="/" tag="a" class="headerMain-nav-link">Home</router-link>
                <router-link to="register" tag="a" class="headerMain-nav-link">Cadastrar</router-link>
                <router-link to="/sales" tag="a" class="headerMain-nav-link">Venda</router-link>
                <router-link to="/queries" tag="a" class="headerMain-nav-link">Consultas</router-link>
			</nav>
		</div>
    </header>
</template>

<script>
import '@/css/header.css'
export default {
    name: 'PartialMenu'
}
</script>