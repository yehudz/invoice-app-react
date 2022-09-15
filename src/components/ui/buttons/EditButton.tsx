function EditButton() {
  return(
    <div
      data-cy="edit-button"
      className="
        flex
        justify-center
        items-center
        rounded-full
        w-[73px]
        h-[48px]
        text-secondary-dark
        bg-light
        hover:bg-secondary
        dark:text-secondary
        dark:bg-gray-dark
        dark:hover:bg-light
        cursor-pointer
        text-[12px]
        font-[500]
      "
    >
      Edit
    </div>
  )
}

export default EditButton