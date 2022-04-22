export interface CurrentLocation {
    Version: number
    Key: string
    Type: string
    Rank: number
    LocalizedName: string
    EnglishName: string
    PrimaryPostalCode: string
    Region: Region
    Country: Country
    AdministrativeArea: AdministrativeArea
    TimeZone: TimeZone
    GeoPosition: GeoPosition
    IsAlias: boolean
    ParentCity: ParentCity
    SupplementalAdminAreas: SupplementalAdminArea[]
    DataSets: string[]
}

export interface Region {
    ID: string
    LocalizedName: string
    EnglishName: string
}

export interface Country {
    ID: string
    LocalizedName: string
    EnglishName: string
}

export interface AdministrativeArea {
    ID: string
    LocalizedName: string
    EnglishName: string
    Level: number
    LocalizedType: string
    EnglishType: string
    CountryID: string
}

export interface TimeZone {
    Code: string
    Name: string
    GmtOffset: number
    IsDaylightSaving: boolean
    NextOffsetChange: string
}

export interface GeoPosition {
    Latitude: number
    Longitude: number
    Elevation: Elevation
}

export interface Elevation {
    Metric: Metric
    Imperial: Imperial
}

export interface Metric {
    Value: number
    Unit: string
    UnitType: number
}

export interface Imperial {
    Value: number
    Unit: string
    UnitType: number
}

export interface ParentCity {
    Key: string
    LocalizedName: string
    EnglishName: string
}

export interface SupplementalAdminArea {
    Level: number
    LocalizedName: string
    EnglishName: string
}
