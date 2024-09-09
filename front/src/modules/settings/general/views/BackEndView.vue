<script lang="ts" setup></script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Mentions Légales</h1>
    </HeaderPage>
    <MainPage class="markdown">
      <section>
        <p>Cette interface peut fonctionner avec plusieurs types de back-end :</p>
        <ul>
          <li>
            IndexedDB: Back-end directement situé dans le navigateur (Base de données IndexedDB)
          </li>
          <li>Serveur Web: Back-end stocké situé sur un serveur web distant</li>
          <li>
            Fichier: Back-end situé sur le disque dur de l'ordinateur de l'utilisateur (Application
            seulement)
          </li>
        </ul>
      </section>
      <section>
        <p>Back-end : <span class="font-bold">IndexedDB</span></p>
      </section>
    </MainPage>
  </PageLayout>
</template>
