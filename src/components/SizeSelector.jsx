const SizeSelector = ({ setSize, size, inProgress }) => {
  return (
    <header class="mb-4">
      <button
        class={
          "px-4 py-1 rounded-md mx-1 border-2 border-red-600" +
          (size() === 4 ? " bg-red-700 text-white" : "")
        }
        disabled={inProgress()}
        onClick={[setSize, 4]}
      >
        4 x 4
      </button>
      <button
        class={
          "px-4 py-1 rounded-md	 mx-1 border-2 border-red-600" +
          (size() === 6 ? " bg-red-700 text-white" : "")
        }
        disabled={inProgress()}
        onClick={[setSize, 6]}
      >
        6 x 6
      </button>
      <button
        class={
          "px-4 py-1 rounded-md mx-1 border-2 border-red-600" +
          (size() === 8 ? " bg-red-700 text-white" : "")
        }
        disabled={inProgress()}
        onClick={[setSize, 8]}
      >
        8 x 8
      </button>
      <button
        class={
          "px-4 py-1 rounded-md mx-1 border-2 border-red-600" +
          (size() === 9 ? " bg-red-700 text-white" : "")
        }
        disabled={inProgress()}
        onClick={[setSize, 9]}
      >
        9 x 9
      </button>
    </header>
  );
};

export default SizeSelector;
