<script setup lang="ts">
import PageLayout from '@/layout/page/PageLayout.vue'
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>Documentation - Introduction</h1>
    </HeaderPage>

    <MainPage>
      <section>
        <p>
          Ce logiciel se propose de succéder de
          <a class="link" href="http://wintit.com/" target="_blank">Wintit</a>. Il est
          progressivement refondu pour diverses raisons :
        </p>
        <ul>
          <li>
            <strong>Etre maintenable</strong> par des ingénieurs informatiques connaissant les
            nouvelles technologies Web. Ils sont moins chers et plus faciles à trouver sur le marché
            que des ingénieurs Cobol NetExpress.
          </li>
          <li>
            Etre <strong>esthétique et ergonomique</strong>. Avoir davantage de possibilité dans le
            développement d'écran visuel.
          </li>
          <li>
            Etre <strong>accessible</strong> : depuis une plus grande variétés de terminaux
            (Ordinateur PC, Tablette, Smartphone), décliné en client lourd (Application Windows), ou
            léger (Site Web Responsive), ou mobile (Application Mobile)
          </li>
        </ul>
        <p>
          Vous pouvez reconnaître les menus de Wintit et leurs écrans correspondant, refondus en
          web. Bonne utilisation !
        </p>
      </section>
    </MainPage>
  </PageLayout>
</template>
