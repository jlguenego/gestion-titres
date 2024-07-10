<script setup lang="ts"></script>

<template>
  <main class="bg-white">
    <form>
      <label>
        <span>Identifiant</span>
        <input type="text" />
        <span class="error">Champ obligatoire</span>
      </label>
      <label>
        <span>Mot de passe</span>
        <input type="password" />
        <span class="error">Champ obligatoire</span>
      </label>
      <div class="error">Erreur technique</div>
      <button>Se connecter</button>
    </form>
  </main>
</template>
