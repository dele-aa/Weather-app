import React from 'react'
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const SubmitButton = () => {
  return (
    <div>
      <Button variant="ghost" type="submit" className='bg-white'>
        <Search className="h-2 w-2 text-black " />
      </Button>
    </div>
  )
}

export default SubmitButton
