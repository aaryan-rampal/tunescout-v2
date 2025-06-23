<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<div class="buttons">
  <button onclick={increment} class="button">
    count is {count}
  </button>

  <button onclick={increment} class="button">
    count is {count}
  </button>
</div>

<style>
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .button {
    background-color: #ff3e00;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
