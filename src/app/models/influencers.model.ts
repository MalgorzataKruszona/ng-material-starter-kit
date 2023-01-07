export interface InfluencersModel {
  readonly avatar: string;
  readonly name: string;
  readonly followedBy: [{readonly name: string; readonly id: number}]
}
