// import imageUrl from "image_url"
// <img src={imageUrl('logo.png')} />

export default function imageUrl(imageName) {
  return `${ASSETS_HOST}images/${imageName}`
  // return [ ASSETS_HOST, "images", imageName].join('/')
}

