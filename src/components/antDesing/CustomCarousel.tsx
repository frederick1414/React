import React from 'react'
import { Carousel, CarouselProps } from 'antd'

const CustomCarousel: React.FunctionComponent<CarouselProps> = (
  props
): React.ReactElement => <Carousel {...props}>{props.children}</Carousel>

export default CustomCarousel
