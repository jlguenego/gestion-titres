<script lang="ts" setup></script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Choix du Back-End</h1>
    </HeaderPage>
    <MainPage class="markdown">
      <section>
        <p>Cette interface peut fonctionner avec plusieurs types de back-end :</p>
        <ul>
          <li>
            IndexedDB: Back-End directement situé dans le navigateur (Base de données IndexedDB)
          </li>
          <li>Serveur Web: Back-End stocké situé sur un serveur web distant</li>
          <li>
            Fichier: Back-End situé sur le disque dur de l'ordinateur de l'utilisateur (Application
            seulement)
          </li>
        </ul>
      </section>
      <section>
        <p>Back-End : <span class="font-bold">IndexedDB</span></p>
      </section>
    </MainPage>
  </PageLayout>
</template>
