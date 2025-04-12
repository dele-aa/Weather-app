import React from 'react'
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const SubmitButton = () => {
  return (
    <div>
      <Button type="submit">
        <Search className="h-4 w-4 text-white" />
      </Button>
    </div>
  )
}

export default SubmitButton
