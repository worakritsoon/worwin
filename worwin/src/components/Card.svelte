<script>
  export let name;
  export let title;
  export let description;
  export let website;
  export let owner;
  export let rating;
</script>

{#if name}
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{name}</ion-card-subtitle>
      <ion-card-title>{title}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>
        {description}
      </p>
    </ion-card-content>
    <ion-avatar {owner} />
    <ion-icon href={website} />
  </ion-card>
{/if}
