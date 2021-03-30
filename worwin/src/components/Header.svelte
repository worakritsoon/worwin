<script>
  export let color;
  export let title = "title";
</script>

<ion-header>
  <ion-toolbar {color}>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" name="person-circle" />
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" name="search" />
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button color="danger">
        <ion-icon
          slot="icon-only"
          ios="ellipsis-horizontal"
          md="ellipsis-vertical"
        />
      </ion-button>
    </ion-buttons>
    <ion-title>{title}</ion-title>
  </ion-toolbar>
</ion-header>
