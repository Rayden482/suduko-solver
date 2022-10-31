const Controls = ({ resetBoard, findSolution, clearBoard, inProgress, hasSolution }) => {
  return (
    <div class="flex justify-center">
      <button
        class="px-4 py-1 rounded-md m-3 border-2 border-red-600"
        disabled={inProgress()}
        onClick={resetBoard}
      >
        Reset
      </button>
      <button
        class="flex justify-center px-4 py-1 rounded-md m-3 bg-red-700 border-2 border-red-600 text-white w-20 disabled:bg-red-100 disabled:border-red-200"
        onClick={findSolution}
        disabled={inProgress() || hasSolution()}
      >
        <Show when={!inProgress()}>Solve</Show>

        <Show when={inProgress()}>
          <div
            style="border-top-color:transparent"
            class="w-6 h-6 border-4 border-red-300 border-solid rounded-full animate-spin"
          ></div>
        </Show>
      </button>

      <button
        class="px-4 py-1 rounded-md m-3 border-2 border-red-600"
        disabled={inProgress()}
        onClick={clearBoard}
      >
        Clear
      </button>
    </div>
  );
};

export default Controls;
