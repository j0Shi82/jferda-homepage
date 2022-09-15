<script>
    const logos = {
      php: () => import('assets/media/images/skills/language/php.svg'),
      csharp: () => import('assets/media/images/skills/language/csharp.svg'),
      sql: () => import('assets/media/images/skills/language/sql.png'),
      java: () => import('assets/media/images/skills/language/java.svg'),
      html: () => import('assets/media/images/skills/language/html.svg'),
      js: () => import('assets/media/images/skills/language/javascript.svg'),
      css: () => import('assets/media/images/skills/language/css.svg'),

      bootstrap: () => import('assets/media/images/skills/frameworks/bootstrap.svg'),
      tailwind: () => import('assets/media/images/skills/frameworks/tailwind.svg'),
      laravel: () => import('assets/media/images/skills/frameworks/laravel.svg'),
      phpbb: () => import('assets/media/images/skills/frameworks/phpbb.svg'),
      vue: () => import('assets/media/images/skills/frameworks/vue.svg'),
      nuxt: () => import('assets/media/images/skills/frameworks/nuxtjs.svg'),
      svelte: () => import('assets/media/images/skills/frameworks/svelte.svg'),
      wp: () => import('assets/media/images/skills/frameworks/wordpress.svg'),
      jquery: () => import('assets/media/images/skills/frameworks/jquery.svg'),
      material: () => import('assets/media/images/skills/frameworks/material.svg'),
      bulma: () => import('assets/media/images/skills/frameworks/bulma.png'),
      qwik: () => import('assets/media/images/skills/frameworks/qwik.png'),

      babel: () => import('assets/media/images/skills/jspackages/babel.svg'),
      eslint: () => import('assets/media/images/skills/jspackages/eslint.svg'),
      npm: () => import('assets/media/images/skills/jspackages/npm.svg'),
      webpack: () => import('assets/media/images/skills/jspackages/webpack.png'),
      express: () => import('assets/media/images/skills/jspackages/express.png'),
      jest: () => import('assets/media/images/skills/jspackages/jest.png'),
      i18next: () => import('assets/media/images/skills/jspackages/i18next.png'),
      vite: () => import('assets/media/images/skills/jspackages/vite.svg'),

      docker: () => import('assets/media/images/skills/software/docker.svg'),
      git: () => import('assets/media/images/skills/software/git.svg'),
      jira: () => import('assets/media/images/skills/software/jira.png'),
      mysql: () => import('assets/media/images/skills/software/mysql.svg'),
      photoshop: () => import('assets/media/images/skills/software/photoshop.svg'),
      sentry: () => import('assets/media/images/skills/software/sentry.svg'),
      vscode: () => import('assets/media/images/skills/software/vscode.png'),
      node: () => import('assets/media/images/skills/software/node.svg'),
    };
    
    export let ident = 'bootstrap';
    export let height = 24;

    let logoURL = null;

    if (logos[ident]) {
      logos[ident]().then((module) => { logoURL = module.default; });
    } else {
      logoURL = 'notfound.gif';
    }
</script>

{#if logoURL !== null}
<img class="jdev-techlogo" src="{logoURL}" alt ="{ident} logo" height="{height}" style="height: {height}" />
{/if}