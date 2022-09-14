function SecondaryButton() {
  return(
    <div
      data-cy="secondary-button"
      className="
        flex
        justify-center
        items-center
        bg-primary
        hover:bg-primary-light
        rounded-full
        w-[149px]
        h-[48px]
        text-white
        cursor-pointer
        text-md
        font-[500]
      "
    >
      Mark as Paid
    </div>
  )
}

export default SecondaryButton