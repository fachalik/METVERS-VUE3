export interface IExploreWorlds {
  id: string | number
  imgUrl: string | null
  title: string
}

export interface INewFeatures {
  imgUrl: string | null
  title: string
  subtitle: string
}

export interface IInsights extends INewFeatures {}

export interface ISocials {
  name: string
  url: string
}
