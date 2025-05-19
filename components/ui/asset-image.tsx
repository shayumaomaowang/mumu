"use client"

import { getAssetUrl } from "@/lib/utils"
import Image from "next/image"
import { useState, useEffect } from "react"

interface AssetImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  placeholder?: string
}

export function AssetImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  priority = false,
  placeholder = "/placeholder.svg",
}: AssetImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("")
  const [placeholderSrc, setPlaceholderSrc] = useState<string>("")

  useEffect(() => {
    // 在客户端计算URL以确保环境变量可用
    setImageSrc(getAssetUrl(src))
    setPlaceholderSrc(getAssetUrl(placeholder))
  }, [src, placeholder])

  // 避免水合时客户端与服务器不匹配
  if (!imageSrc) {
    return null
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = placeholderSrc
      }}
    />
  )
} 