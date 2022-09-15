function SecondaryButton() {
  return(
    <div
      data-cy="add-new-item-button"
      className="
        flex
        justify-center
        items-center
        text-secondary-dark
        dark:text-secondary
        text-[12px]
        bg-[#F9FAFE]
        dark:bg-gray-dark
        hover:bg-secondary
        dark:hover:bg-black
        rounded-full
        w-full
        h-[48px]
        cursor-pointer
        font-[500]
      "
    >
      + Add New Item
    </div>
  )
}

export default SecondaryButton