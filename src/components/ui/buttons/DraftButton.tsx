function EditButton() {
  return(
    <div
      data-cy="draft-button"
      className="
        flex
        justify-center
        items-center
        rounded-full
        w-[117px]
        h-[48px]
        md:w-[133px]
        text-gray-light
        bg-midnight
        hover:bg-black
        hover:text-white
        dark:text-secondary
        dark:bg-black
        dark:hover:bg-black
        cursor-pointer
        text-[12px]
        font-[500]
      "
    >
      Save as Draft
    </div>
  )
}

export default EditButton