const counties = [
  {
    "id": "01001",
    "name": "Autauga County, AL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "01003",
    "name": "Baldwin County, AL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "01005",
    "name": "Barbour County, AL",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "01007",
    "name": "Bibb County, AL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "01009",
    "name": "Blount County, AL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "01011",
    "name": "Bullock County, AL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "01013",
    "name": "Butler County, AL",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": "01015",
    "name": "Calhoun County, AL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "01017",
    "name": "Chambers County, AL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "01019",
    "name": "Cherokee County, AL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "01021",
    "name": "Chilton County, AL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "01023",
    "name": "Choctaw County, AL",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": "01025",
    "name": "Clarke County, AL",
    "year": 2017,
    "unemployment_rate": 8.5
  },
  {
    "id": "01027",
    "name": "Clay County, AL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "01029",
    "name": "Cleburne County, AL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "01031",
    "name": "Coffee County, AL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "01033",
    "name": "Colbert County, AL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": "01035",
    "name": "Conecuh County, AL",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": "01037",
    "name": "Coosa County, AL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": "01039",
    "name": "Covington County, AL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": "01041",
    "name": "Crenshaw County, AL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "01043",
    "name": "Cullman County, AL",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "01045",
    "name": "Dale County, AL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "01047",
    "name": "Dallas County, AL",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": "01049",
    "name": "DeKalb County, AL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "01051",
    "name": "Elmore County, AL",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": "01053",
    "name": "Escambia County, AL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "01055",
    "name": "Etowah County, AL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": "01057",
    "name": "Fayette County, AL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": "01059",
    "name": "Franklin County, AL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "01061",
    "name": "Geneva County, AL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "01063",
    "name": "Greene County, AL",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": "01065",
    "name": "Hale County, AL",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": "01067",
    "name": "Henry County, AL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "01069",
    "name": "Houston County, AL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "01071",
    "name": "Jackson County, AL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "01073",
    "name": "Jefferson County, AL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "01075",
    "name": "Lamar County, AL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "01077",
    "name": "Lauderdale County, AL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": "01079",
    "name": "Lawrence County, AL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "01081",
    "name": "Lee County, AL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "01083",
    "name": "Limestone County, AL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "01085",
    "name": "Lowndes County, AL",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": "01087",
    "name": "Macon County, AL",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "01089",
    "name": "Madison County, AL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "01091",
    "name": "Marengo County, AL",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": "01093",
    "name": "Marion County, AL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "01095",
    "name": "Marshall County, AL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "01097",
    "name": "Mobile County, AL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": "01099",
    "name": "Monroe County, AL",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": "01101",
    "name": "Montgomery County, AL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "01103",
    "name": "Morgan County, AL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "01105",
    "name": "Perry County, AL",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": "01107",
    "name": "Pickens County, AL",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": "01109",
    "name": "Pike County, AL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "01111",
    "name": "Randolph County, AL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "01113",
    "name": "Russell County, AL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "01115",
    "name": "St. Clair County, AL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "01117",
    "name": "Shelby County, AL",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": "01119",
    "name": "Sumter County, AL",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": "01121",
    "name": "Talladega County, AL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "01123",
    "name": "Tallapoosa County, AL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "01125",
    "name": "Tuscaloosa County, AL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "01127",
    "name": "Walker County, AL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": "01129",
    "name": "Washington County, AL",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": "01131",
    "name": "Wilcox County, AL",
    "year": 2017,
    "unemployment_rate": 11.5
  },
  {
    "id": "01133",
    "name": "Winston County, AL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": "02013",
    "name": "Aleutians East Borough, AK",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": "02016",
    "name": "Aleutians West Census Area, AK",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": "02020",
    "name": "Anchorage Borough/municipality, AK",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "02050",
    "name": "Bethel Census Area, AK",
    "year": 2017,
    "unemployment_rate": 13.5
  },
  {
    "id": "02060",
    "name": "Bristol Bay Borough, AK",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": "02068",
    "name": "Denali Borough, AK",
    "year": 2017,
    "unemployment_rate": 9
  },
  {
    "id": "02070",
    "name": "Dillingham Census Area, AK",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": "02090",
    "name": "Fairbanks North Star Borough, AK",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": "02100",
    "name": "Haines Borough, AK",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": "02105",
    "name": "Hoonah-Angoon Census Area, AK",
    "year": 2017,
    "unemployment_rate": 12.3
  },
  {
    "id": "02110",
    "name": "Juneau Borough/city, AK",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": "02122",
    "name": "Kenai Peninsula Borough, AK",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": "02130",
    "name": "Ketchikan Gateway Borough, AK",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": "02150",
    "name": "Kodiak Island Borough, AK",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "02158",
    "name": "Kusilvak Census Area, AK",
    "year": 2017,
    "unemployment_rate": 19.6
  },
  {
    "id": "02164",
    "name": "Lake and Peninsula Borough, AK",
    "year": 2017,
    "unemployment_rate": 11.7
  },
  {
    "id": "02170",
    "name": "Matanuska-Susitna Borough, AK",
    "year": 2017,
    "unemployment_rate": 8.2
  },
  {
    "id": "02180",
    "name": "Nome Census Area, AK",
    "year": 2017,
    "unemployment_rate": 12.1
  },
  {
    "id": "02185",
    "name": "North Slope Borough, AK",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": "02188",
    "name": "Northwest Arctic Borough, AK",
    "year": 2017,
    "unemployment_rate": 16.2
  },
  {
    "id": "02195",
    "name": "Petersburg Borough, AK",
    "year": 2017,
    "unemployment_rate": 9.2
  },
  {
    "id": "02198",
    "name": "Prince of Wales-Hyder Census Area, AK",
    "year": 2017,
    "unemployment_rate": 11
  },
  {
    "id": "02220",
    "name": "Sitka Borough/city, AK",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "02230",
    "name": "Skagway Municipality, AK",
    "year": 2017,
    "unemployment_rate": 10.2
  },
  {
    "id": "02240",
    "name": "Southeast Fairbanks Census Area, AK",
    "year": 2017,
    "unemployment_rate": 10.2
  },
  {
    "id": "02261",
    "name": "Valdez-Cordova Census Area, AK",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": "02275",
    "name": "Wrangell Borough/city, AK",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": "02282",
    "name": "Yakutat Borough/city, AK",
    "year": 2017,
    "unemployment_rate": 9.4
  },
  {
    "id": "02290",
    "name": "Yukon-Koyukuk Census Area, AK",
    "year": 2017,
    "unemployment_rate": 17.6
  },
  {
    "id": "04001",
    "name": "Apache County, AZ",
    "year": 2017,
    "unemployment_rate": 10.3
  },
  {
    "id": "04003",
    "name": "Cochise County, AZ",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": "04005",
    "name": "Coconino County, AZ",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": "04007",
    "name": "Gila County, AZ",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": "04009",
    "name": "Graham County, AZ",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": "04011",
    "name": "Greenlee County, AZ",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "04012",
    "name": "La Paz County, AZ",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": "04013",
    "name": "Maricopa County, AZ",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "04015",
    "name": "Mohave County, AZ",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": "04017",
    "name": "Navajo County, AZ",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": "04019",
    "name": "Pima County, AZ",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "04021",
    "name": "Pinal County, AZ",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "04023",
    "name": "Santa Cruz County, AZ",
    "year": 2017,
    "unemployment_rate": 9.5
  },
  {
    "id": "04025",
    "name": "Yavapai County, AZ",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "04027",
    "name": "Yuma County, AZ",
    "year": 2017,
    "unemployment_rate": 17
  },
  {
    "id": "05001",
    "name": "Arkansas County, AR",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": "05003",
    "name": "Ashley County, AR",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": "05005",
    "name": "Baxter County, AR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "05007",
    "name": "Benton County, AR",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": "05009",
    "name": "Boone County, AR",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": "05011",
    "name": "Bradley County, AR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "05013",
    "name": "Calhoun County, AR",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "05015",
    "name": "Carroll County, AR",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": "05017",
    "name": "Chicot County, AR",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": "05019",
    "name": "Clark County, AR",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "05021",
    "name": "Clay County, AR",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "05023",
    "name": "Cleburne County, AR",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "05025",
    "name": "Cleveland County, AR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "05027",
    "name": "Columbia County, AR",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": "05029",
    "name": "Conway County, AR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "05031",
    "name": "Craighead County, AR",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": "05033",
    "name": "Crawford County, AR",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": "05035",
    "name": "Crittenden County, AR",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "05037",
    "name": "Cross County, AR",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "05039",
    "name": "Dallas County, AR",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "05041",
    "name": "Desha County, AR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "05043",
    "name": "Drew County, AR",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": "05045",
    "name": "Faulkner County, AR",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": "05047",
    "name": "Franklin County, AR",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": "05049",
    "name": "Fulton County, AR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "05051",
    "name": "Garland County, AR",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "05053",
    "name": "Grant County, AR",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": "05055",
    "name": "Greene County, AR",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": "05057",
    "name": "Hempstead County, AR",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": "05059",
    "name": "Hot Spring County, AR",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": "05061",
    "name": "Howard County, AR",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": "05063",
    "name": "Independence County, AR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "05065",
    "name": "Izard County, AR",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": "05067",
    "name": "Jackson County, AR",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": "05069",
    "name": "Jefferson County, AR",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": "05071",
    "name": "Johnson County, AR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "05073",
    "name": "Lafayette County, AR",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": "05075",
    "name": "Lawrence County, AR",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "05077",
    "name": "Lee County, AR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "05079",
    "name": "Lincoln County, AR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "05081",
    "name": "Little River County, AR",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "05083",
    "name": "Logan County, AR",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "05085",
    "name": "Lonoke County, AR",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": "05087",
    "name": "Madison County, AR",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "05089",
    "name": "Marion County, AR",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "05091",
    "name": "Miller County, AR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "05093",
    "name": "Mississippi County, AR",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": "05095",
    "name": "Monroe County, AR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": "05097",
    "name": "Montgomery County, AR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "05099",
    "name": "Nevada County, AR",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": "05101",
    "name": "Newton County, AR",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": "05103",
    "name": "Ouachita County, AR",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": "05105",
    "name": "Perry County, AR",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "05107",
    "name": "Phillips County, AR",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "05109",
    "name": "Pike County, AR",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "05111",
    "name": "Poinsett County, AR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "05113",
    "name": "Polk County, AR",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "05115",
    "name": "Pope County, AR",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "05117",
    "name": "Prairie County, AR",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "05119",
    "name": "Pulaski County, AR",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": "05121",
    "name": "Randolph County, AR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "05123",
    "name": "St. Francis County, AR",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "05125",
    "name": "Saline County, AR",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": "05127",
    "name": "Scott County, AR",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": "05129",
    "name": "Searcy County, AR",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": "05131",
    "name": "Sebastian County, AR",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": "05133",
    "name": "Sevier County, AR",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": "05135",
    "name": "Sharp County, AR",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "05137",
    "name": "Stone County, AR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "05139",
    "name": "Union County, AR",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": "05141",
    "name": "Van Buren County, AR",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": "05143",
    "name": "Washington County, AR",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": "05145",
    "name": "White County, AR",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "05147",
    "name": "Woodruff County, AR",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "05149",
    "name": "Yell County, AR",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "06001",
    "name": "Alameda County, CA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": "06003",
    "name": "Alpine County, CA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": "06005",
    "name": "Amador County, CA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": "06007",
    "name": "Butte County, CA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "06009",
    "name": "Calaveras County, CA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": "06011",
    "name": "Colusa County, CA",
    "year": 2017,
    "unemployment_rate": 14.2
  },
  {
    "id": "06013",
    "name": "Contra Costa County, CA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "06015",
    "name": "Del Norte County, CA",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": "06017",
    "name": "El Dorado County, CA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "06019",
    "name": "Fresno County, CA",
    "year": 2017,
    "unemployment_rate": 8.5
  },
  {
    "id": "06021",
    "name": "Glenn County, CA",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": "06023",
    "name": "Humboldt County, CA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "06025",
    "name": "Imperial County, CA",
    "year": 2017,
    "unemployment_rate": 19.5
  },
  {
    "id": "06027",
    "name": "Inyo County, CA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "06029",
    "name": "Kern County, CA",
    "year": 2017,
    "unemployment_rate": 9.2
  },
  {
    "id": "06031",
    "name": "Kings County, CA",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": "06033",
    "name": "Lake County, CA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "06035",
    "name": "Lassen County, CA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": "06037",
    "name": "Los Angeles County, CA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "06039",
    "name": "Madera County, CA",
    "year": 2017,
    "unemployment_rate": 8.1
  },
  {
    "id": "06041",
    "name": "Marin County, CA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "06043",
    "name": "Mariposa County, CA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "06045",
    "name": "Mendocino County, CA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "06047",
    "name": "Merced County, CA",
    "year": 2017,
    "unemployment_rate": 9.4
  },
  {
    "id": "06049",
    "name": "Modoc County, CA",
    "year": 2017,
    "unemployment_rate": 8.1
  },
  {
    "id": "06051",
    "name": "Mono County, CA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "06053",
    "name": "Monterey County, CA",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": "06055",
    "name": "Napa County, CA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": "06057",
    "name": "Nevada County, CA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "06059",
    "name": "Orange County, CA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": "06061",
    "name": "Placer County, CA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "06063",
    "name": "Plumas County, CA",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": "06065",
    "name": "Riverside County, CA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": "06067",
    "name": "Sacramento County, CA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": "06069",
    "name": "San Benito County, CA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "06071",
    "name": "San Bernardino County, CA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "06073",
    "name": "San Diego County, CA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "06075",
    "name": "San Francisco County/city, CA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "06077",
    "name": "San Joaquin County, CA",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": "06079",
    "name": "San Luis Obispo County, CA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": "06081",
    "name": "San Mateo County, CA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": "06083",
    "name": "Santa Barbara County, CA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "06085",
    "name": "Santa Clara County, CA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": "06087",
    "name": "Santa Cruz County, CA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": "06089",
    "name": "Shasta County, CA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": "06091",
    "name": "Sierra County, CA",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": "06093",
    "name": "Siskiyou County, CA",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": "06095",
    "name": "Solano County, CA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": "06097",
    "name": "Sonoma County, CA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": "06099",
    "name": "Stanislaus County, CA",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": "06101",
    "name": "Sutter County, CA",
    "year": 2017,
    "unemployment_rate": 8.7
  },
  {
    "id": "06103",
    "name": "Tehama County, CA",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": "06105",
    "name": "Trinity County, CA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": "06107",
    "name": "Tulare County, CA",
    "year": 2017,
    "unemployment_rate": 10.4
  },
  {
    "id": "06109",
    "name": "Tuolumne County, CA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": "06111",
    "name": "Ventura County, CA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "06113",
    "name": "Yolo County, CA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": "06115",
    "name": "Yuba County, CA",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": "08001",
    "name": "Adams County, CO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "08003",
    "name": "Alamosa County, CO",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": "08005",
    "name": "Arapahoe County, CO",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": "08007",
    "name": "Archuleta County, CO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "08009",
    "name": "Baca County, CO",
    "year": 2017,
    "unemployment_rate": 1.6
  },
  {
    "id": "08011",
    "name": "Bent County, CO",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": "08013",
    "name": "Boulder County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08014",
    "name": "Broomfield County/city, CO",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": "08015",
    "name": "Chaffee County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08017",
    "name": "Cheyenne County, CO",
    "year": 2017,
    "unemployment_rate": 1.7
  },
  {
    "id": "08019",
    "name": "Clear Creek County, CO",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": "08021",
    "name": "Conejos County, CO",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "08023",
    "name": "Costilla County, CO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": "08025",
    "name": "Crowley County, CO",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": "08027",
    "name": "Custer County, CO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "08029",
    "name": "Delta County, CO",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": "08031",
    "name": "Denver County/city, CO",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": "08033",
    "name": "Dolores County, CO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": "08035",
    "name": "Douglas County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08037",
    "name": "Eagle County, CO",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": "08039",
    "name": "Elbert County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08041",
    "name": "El Paso County, CO",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": "08043",
    "name": "Fremont County, CO",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "08045",
    "name": "Garfield County, CO",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": "08047",
    "name": "Gilpin County, CO",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": "08049",
    "name": "Grand County, CO",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": "08051",
    "name": "Gunnison County, CO",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": "08053",
    "name": "Hinsdale County, CO",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": "08055",
    "name": "Huerfano County, CO",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": "08057",
    "name": "Jackson County, CO",
    "year": 2017,
    "unemployment_rate": 1.8
  },
  {
    "id": "08059",
    "name": "Jefferson County, CO",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": "08061",
    "name": "Kiowa County, CO",
    "year": 2017,
    "unemployment_rate": 1.7
  },
  {
    "id": "08063",
    "name": "Kit Carson County, CO",
    "year": 2017,
    "unemployment_rate": 1.6
  },
  {
    "id": "08065",
    "name": "Lake County, CO",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": "08067",
    "name": "La Plata County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08069",
    "name": "Larimer County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08071",
    "name": "Las Animas County, CO",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": "08073",
    "name": "Lincoln County, CO",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": "08075",
    "name": "Logan County, CO",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": "08077",
    "name": "Mesa County, CO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "08079",
    "name": "Mineral County, CO",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": "08081",
    "name": "Moffat County, CO",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": "08083",
    "name": "Montezuma County, CO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "08085",
    "name": "Montrose County, CO",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": "08087",
    "name": "Morgan County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08089",
    "name": "Otero County, CO",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "08091",
    "name": "Ouray County, CO",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": "08093",
    "name": "Park County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08095",
    "name": "Phillips County, CO",
    "year": 2017,
    "unemployment_rate": 1.6
  },
  {
    "id": "08097",
    "name": "Pitkin County, CO",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": "08099",
    "name": "Prowers County, CO",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": "08101",
    "name": "Pueblo County, CO",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "08103",
    "name": "Rio Blanco County, CO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": "08105",
    "name": "Rio Grande County, CO",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "08107",
    "name": "Routt County, CO",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": "08109",
    "name": "Saguache County, CO",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": "08111",
    "name": "San Juan County, CO",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": "08113",
    "name": "San Miguel County, CO",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": "08115",
    "name": "Sedgwick County, CO",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": "08117",
    "name": "Summit County, CO",
    "year": 2017,
    "unemployment_rate": 1.8
  },
  {
    "id": "08119",
    "name": "Teller County, CO",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": "08121",
    "name": "Washington County, CO",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": "08123",
    "name": "Weld County, CO",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": "08125",
    "name": "Yuma County, CO",
    "year": 2017,
    "unemployment_rate": 1.5
  },
  {
    "id": "09001",
    "name": "Fairfield County, CT",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": "09003",
    "name": "Hartford County, CT",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": "09005",
    "name": "Litchfield County, CT",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": "09007",
    "name": "Middlesex County, CT",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": "09009",
    "name": "New Haven County, CT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": "09011",
    "name": "New London County, CT",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": "09013",
    "name": "Tolland County, CT",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": "09015",
    "name": "Windham County, CT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 10001,
    "name": "Kent County, DE",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 10003,
    "name": "New Castle County, DE",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 10005,
    "name": "Sussex County, DE",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  
  {
    "id": 11001,
    "name": "District of Columbia",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 12001,
    "name": "Alachua County, FL",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 12003,
    "name": "Baker County, FL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 12005,
    "name": "Bay County, FL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 12007,
    "name": "Bradford County, FL",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 12009,
    "name": "Brevard County, FL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 12011,
    "name": "Broward County, FL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 12013,
    "name": "Calhoun County, FL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 12015,
    "name": "Charlotte County, FL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 12017,
    "name": "Citrus County, FL",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 12019,
    "name": "Clay County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12021,
    "name": "Collier County, FL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 12023,
    "name": "Columbia County, FL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 12027,
    "name": "DeSoto County, FL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 12029,
    "name": "Dixie County, FL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 12031,
    "name": "Duval County, FL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 12033,
    "name": "Escambia County, FL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 12035,
    "name": "Flagler County, FL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 12037,
    "name": "Franklin County, FL",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 12039,
    "name": "Gadsden County, FL",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 12041,
    "name": "Gilchrist County, FL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 12043,
    "name": "Glades County, FL",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 12045,
    "name": "Gulf County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12047,
    "name": "Hamilton County, FL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 12049,
    "name": "Hardee County, FL",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 12051,
    "name": "Hendry County, FL",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 12053,
    "name": "Hernando County, FL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 12055,
    "name": "Highlands County, FL",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 12057,
    "name": "Hillsborough County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12059,
    "name": "Holmes County, FL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 12061,
    "name": "Indian River County, FL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 12063,
    "name": "Jackson County, FL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 12065,
    "name": "Jefferson County, FL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 12067,
    "name": "Lafayette County, FL",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 12069,
    "name": "Lake County, FL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 12071,
    "name": "Lee County, FL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 12073,
    "name": "Leon County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12075,
    "name": "Levy County, FL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 12077,
    "name": "Liberty County, FL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 12079,
    "name": "Madison County, FL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 12081,
    "name": "Manatee County, FL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 12083,
    "name": "Marion County, FL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 12085,
    "name": "Martin County, FL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 12086,
    "name": "Miami-Dade County, FL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 12087,
    "name": "Monroe County, FL",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 12089,
    "name": "Nassau County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12091,
    "name": "Okaloosa County, FL",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 12093,
    "name": "Okeechobee County, FL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 12095,
    "name": "Orange County, FL",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 12097,
    "name": "Osceola County, FL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 12099,
    "name": "Palm Beach County, FL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 12101,
    "name": "Pasco County, FL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 12103,
    "name": "Pinellas County, FL",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 12105,
    "name": "Polk County, FL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 12107,
    "name": "Putnam County, FL",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 12109,
    "name": "St. Johns County, FL",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 12111,
    "name": "St. Lucie County, FL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 12113,
    "name": "Santa Rosa County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12115,
    "name": "Sarasota County, FL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 12117,
    "name": "Seminole County, FL",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 12119,
    "name": "Sumter County, FL",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 12121,
    "name": "Suwannee County, FL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 12123,
    "name": "Taylor County, FL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 12125,
    "name": "Union County, FL",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 12127,
    "name": "Volusia County, FL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 12129,
    "name": "Wakulla County, FL",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 12131,
    "name": "Walton County, FL",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 12133,
    "name": "Washington County, FL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13001,
    "name": "Appling County, GA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 13003,
    "name": "Atkinson County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13005,
    "name": "Bacon County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13007,
    "name": "Baker County, GA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 13009,
    "name": "Baldwin County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13011,
    "name": "Banks County, GA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 13013,
    "name": "Barrow County, GA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 13015,
    "name": "Bartow County, GA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 13017,
    "name": "Ben Hill County, GA",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 13019,
    "name": "Berrien County, GA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 13021,
    "name": "Bibb County, GA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 13023,
    "name": "Bleckley County, GA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 13025,
    "name": "Brantley County, GA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 13027,
    "name": "Brooks County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13029,
    "name": "Bryan County, GA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 13031,
    "name": "Bulloch County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13033,
    "name": "Burke County, GA",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 13035,
    "name": "Butts County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 13037,
    "name": "Calhoun County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13039,
    "name": "Camden County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13043,
    "name": "Candler County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13045,
    "name": "Carroll County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13047,
    "name": "Catoosa County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13049,
    "name": "Charlton County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13051,
    "name": "Chatham County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13053,
    "name": "Chattahoochee County, GA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 13055,
    "name": "Chattooga County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13057,
    "name": "Cherokee County, GA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 13059,
    "name": "Clarke County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13061,
    "name": "Clay County, GA",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": 13063,
    "name": "Clayton County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13065,
    "name": "Clinch County, GA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 13067,
    "name": "Cobb County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13069,
    "name": "Coffee County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13071,
    "name": "Colquitt County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13073,
    "name": "Columbia County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13075,
    "name": "Cook County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13077,
    "name": "Coweta County, GA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 13079,
    "name": "Crawford County, GA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 13081,
    "name": "Crisp County, GA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 13083,
    "name": "Dade County, GA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 13085,
    "name": "Dawson County, GA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 13087,
    "name": "Decatur County, GA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 13089,
    "name": "DeKalb County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 13091,
    "name": "Dodge County, GA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 13093,
    "name": "Dooly County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13095,
    "name": "Dougherty County, GA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 13097,
    "name": "Douglas County, GA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 13099,
    "name": "Early County, GA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 13101,
    "name": "Echols County, GA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 13103,
    "name": "Effingham County, GA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 13105,
    "name": "Elbert County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13107,
    "name": "Emanuel County, GA",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 13109,
    "name": "Evans County, GA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 13111,
    "name": "Fannin County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13113,
    "name": "Fayette County, GA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 13115,
    "name": "Floyd County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13117,
    "name": "Forsyth County, GA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 13119,
    "name": "Franklin County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13121,
    "name": "Fulton County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 13123,
    "name": "Gilmer County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13125,
    "name": "Glascock County, GA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 13127,
    "name": "Glynn County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13129,
    "name": "Gordon County, GA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 13131,
    "name": "Grady County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 13133,
    "name": "Greene County, GA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 13135,
    "name": "Gwinnett County, GA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 13137,
    "name": "Habersham County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13139,
    "name": "Hall County, GA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 13141,
    "name": "Hancock County, GA",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 13143,
    "name": "Haralson County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13145,
    "name": "Harris County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13147,
    "name": "Hart County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13149,
    "name": "Heard County, GA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 13151,
    "name": "Henry County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 13153,
    "name": "Houston County, GA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 13155,
    "name": "Irwin County, GA",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 13157,
    "name": "Jackson County, GA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 13159,
    "name": "Jasper County, GA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 13161,
    "name": "Jeff Davis County, GA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 13163,
    "name": "Jefferson County, GA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 13165,
    "name": "Jenkins County, GA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 13167,
    "name": "Johnson County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13169,
    "name": "Jones County, GA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 13171,
    "name": "Lamar County, GA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 13173,
    "name": "Lanier County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13175,
    "name": "Laurens County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13177,
    "name": "Lee County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13179,
    "name": "Liberty County, GA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 13181,
    "name": "Lincoln County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13183,
    "name": "Long County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 13185,
    "name": "Lowndes County, GA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 13187,
    "name": "Lumpkin County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13189,
    "name": "McDuffie County, GA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 13191,
    "name": "McIntosh County, GA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 13193,
    "name": "Macon County, GA",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 13195,
    "name": "Madison County, GA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 13197,
    "name": "Marion County, GA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 13199,
    "name": "Meriwether County, GA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 13201,
    "name": "Miller County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13205,
    "name": "Mitchell County, GA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 13207,
    "name": "Monroe County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13209,
    "name": "Montgomery County, GA",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 13211,
    "name": "Morgan County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13213,
    "name": "Murray County, GA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 13215,
    "name": "Muscogee County, GA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 13217,
    "name": "Newton County, GA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 13219,
    "name": "Oconee County, GA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 13221,
    "name": "Oglethorpe County, GA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 13223,
    "name": "Paulding County, GA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 13225,
    "name": "Peach County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13227,
    "name": "Pickens County, GA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 13229,
    "name": "Pierce County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13231,
    "name": "Pike County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13233,
    "name": "Polk County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13235,
    "name": "Pulaski County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13237,
    "name": "Putnam County, GA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 13239,
    "name": "Quitman County, GA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 13241,
    "name": "Rabun County, GA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 13243,
    "name": "Randolph County, GA",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 13245,
    "name": "Richmond County, GA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 13247,
    "name": "Rockdale County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13249,
    "name": "Schley County, GA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 13251,
    "name": "Screven County, GA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 13253,
    "name": "Seminole County, GA",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 13255,
    "name": "Spalding County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13257,
    "name": "Stephens County, GA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 13259,
    "name": "Stewart County, GA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 13261,
    "name": "Sumter County, GA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 13263,
    "name": "Talbot County, GA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 13265,
    "name": "Taliaferro County, GA",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 13267,
    "name": "Tattnall County, GA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 13269,
    "name": "Taylor County, GA",
    "year": 2017,
    "unemployment_rate": 8.6
  },
  {
    "id": 13271,
    "name": "Telfair County, GA",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": 13273,
    "name": "Terrell County, GA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 13275,
    "name": "Thomas County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13277,
    "name": "Tift County, GA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 13279,
    "name": "Toombs County, GA",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 13281,
    "name": "Towns County, GA",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 13283,
    "name": "Treutlen County, GA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 13285,
    "name": "Troup County, GA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 13287,
    "name": "Turner County, GA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 13289,
    "name": "Twiggs County, GA",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 13291,
    "name": "Union County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13293,
    "name": "Upson County, GA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 13295,
    "name": "Walker County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13297,
    "name": "Walton County, GA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 13299,
    "name": "Ware County, GA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 13301,
    "name": "Warren County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13303,
    "name": "Washington County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13305,
    "name": "Wayne County, GA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 13307,
    "name": "Webster County, GA",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 13309,
    "name": "Wheeler County, GA",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": 13311,
    "name": "White County, GA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 13313,
    "name": "Whitfield County, GA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 13315,
    "name": "Wilcox County, GA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 13317,
    "name": "Wilkes County, GA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 13319,
    "name": "Wilkinson County, GA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 13321,
    "name": "Worth County, GA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 15001,
    "name": "Hawaii County, HI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 15003,
    "name": "Honolulu County/city, HI",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 15007,
    "name": "Kauai County, HI",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 15009,
    "name": "Maui County, HI",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 16001,
    "name": "Ada County, ID",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 16003,
    "name": "Adams County, ID",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 16005,
    "name": "Bannock County, ID",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 16007,
    "name": "Bear Lake County, ID",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 16009,
    "name": "Benewah County, ID",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 16011,
    "name": "Bingham County, ID",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 16013,
    "name": "Blaine County, ID",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 16015,
    "name": "Boise County, ID",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 16017,
    "name": "Bonner County, ID",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 16019,
    "name": "Bonneville County, ID",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 16021,
    "name": "Boundary County, ID",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 16023,
    "name": "Butte County, ID",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 16025,
    "name": "Camas County, ID",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 16027,
    "name": "Canyon County, ID",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 16029,
    "name": "Caribou County, ID",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 16031,
    "name": "Cassia County, ID",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 16033,
    "name": "Clark County, ID",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 16035,
    "name": "Clearwater County, ID",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 16037,
    "name": "Custer County, ID",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 16039,
    "name": "Elmore County, ID",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 16041,
    "name": "Franklin County, ID",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 16043,
    "name": "Fremont County, ID",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 16045,
    "name": "Gem County, ID",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 16047,
    "name": "Gooding County, ID",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 16049,
    "name": "Idaho County, ID",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 16051,
    "name": "Jefferson County, ID",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 16053,
    "name": "Jerome County, ID",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 16055,
    "name": "Kootenai County, ID",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 16057,
    "name": "Latah County, ID",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 16059,
    "name": "Lemhi County, ID",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 16061,
    "name": "Lewis County, ID",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 16063,
    "name": "Lincoln County, ID",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 16065,
    "name": "Madison County, ID",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": 16067,
    "name": "Minidoka County, ID",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 16069,
    "name": "Nez Perce County, ID",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 16071,
    "name": "Oneida County, ID",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 16073,
    "name": "Owyhee County, ID",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 16075,
    "name": "Payette County, ID",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 16077,
    "name": "Power County, ID",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 16079,
    "name": "Shoshone County, ID",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 16081,
    "name": "Teton County, ID",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 16083,
    "name": "Twin Falls County, ID",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 16085,
    "name": "Valley County, ID",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 16087,
    "name": "Washington County, ID",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 17001,
    "name": "Adams County, IL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 17003,
    "name": "Alexander County, IL",
    "year": 2017,
    "unemployment_rate": 8.4
  },
  {
    "id": 17005,
    "name": "Bond County, IL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 17007,
    "name": "Boone County, IL",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 17009,
    "name": "Brown County, IL",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 17011,
    "name": "Bureau County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17013,
    "name": "Calhoun County, IL",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 17015,
    "name": "Carroll County, IL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 17017,
    "name": "Cass County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17019,
    "name": "Champaign County, IL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 17021,
    "name": "Christian County, IL",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 17023,
    "name": "Clark County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17025,
    "name": "Clay County, IL",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 17027,
    "name": "Clinton County, IL",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 17029,
    "name": "Coles County, IL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 17031,
    "name": "Cook County, IL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 17033,
    "name": "Crawford County, IL",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 17035,
    "name": "Cumberland County, IL",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 17037,
    "name": "DeKalb County, IL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 17039,
    "name": "De Witt County, IL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 17041,
    "name": "Douglas County, IL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 17043,
    "name": "DuPage County, IL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 17045,
    "name": "Edgar County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17047,
    "name": "Edwards County, IL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 17049,
    "name": "Effingham County, IL",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 17051,
    "name": "Fayette County, IL",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 17053,
    "name": "Ford County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17055,
    "name": "Franklin County, IL",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 17057,
    "name": "Fulton County, IL",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 17059,
    "name": "Gallatin County, IL",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 17061,
    "name": "Greene County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17063,
    "name": "Grundy County, IL",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 17065,
    "name": "Hamilton County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17067,
    "name": "Hancock County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17069,
    "name": "Hardin County, IL",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": 17071,
    "name": "Henderson County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17073,
    "name": "Henry County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17075,
    "name": "Iroquois County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17077,
    "name": "Jackson County, IL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 17079,
    "name": "Jasper County, IL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 17081,
    "name": "Jefferson County, IL",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 17083,
    "name": "Jersey County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17085,
    "name": "Jo Daviess County, IL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 17087,
    "name": "Johnson County, IL",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 17089,
    "name": "Kane County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17091,
    "name": "Kankakee County, IL",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 17093,
    "name": "Kendall County, IL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 17095,
    "name": "Knox County, IL",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 17097,
    "name": "Lake County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17099,
    "name": "LaSalle County, IL",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 17101,
    "name": "Lawrence County, IL",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 17103,
    "name": "Lee County, IL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 17105,
    "name": "Livingston County, IL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 17107,
    "name": "Logan County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17109,
    "name": "McDonough County, IL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 17111,
    "name": "McHenry County, IL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 17113,
    "name": "McLean County, IL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 17115,
    "name": "Macon County, IL",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 17117,
    "name": "Macoupin County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17119,
    "name": "Madison County, IL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 17121,
    "name": "Marion County, IL",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 17123,
    "name": "Marshall County, IL",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 17125,
    "name": "Mason County, IL",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 17127,
    "name": "Massac County, IL",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 17129,
    "name": "Menard County, IL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 17131,
    "name": "Mercer County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17133,
    "name": "Monroe County, IL",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 17135,
    "name": "Montgomery County, IL",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 17137,
    "name": "Morgan County, IL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 17139,
    "name": "Moultrie County, IL",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 17141,
    "name": "Ogle County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17143,
    "name": "Peoria County, IL",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 17145,
    "name": "Perry County, IL",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 17147,
    "name": "Piatt County, IL",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 17149,
    "name": "Pike County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17151,
    "name": "Pope County, IL",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 17153,
    "name": "Pulaski County, IL",
    "year": 2017,
    "unemployment_rate": 8
  },
  {
    "id": 17155,
    "name": "Putnam County, IL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 17157,
    "name": "Randolph County, IL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 17159,
    "name": "Richland County, IL",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 17161,
    "name": "Rock Island County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17163,
    "name": "St. Clair County, IL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 17165,
    "name": "Saline County, IL",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 17167,
    "name": "Sangamon County, IL",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 17169,
    "name": "Schuyler County, IL",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 17171,
    "name": "Scott County, IL",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 17173,
    "name": "Shelby County, IL",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 17175,
    "name": "Stark County, IL",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 17177,
    "name": "Stephenson County, IL",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 17179,
    "name": "Tazewell County, IL",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 17181,
    "name": "Union County, IL",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 17183,
    "name": "Vermilion County, IL",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 17185,
    "name": "Wabash County, IL",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 17187,
    "name": "Warren County, IL",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 17189,
    "name": "Washington County, IL",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 17191,
    "name": "Wayne County, IL",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 17193,
    "name": "White County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17195,
    "name": "Whiteside County, IL",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 17197,
    "name": "Will County, IL",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 17199,
    "name": "Williamson County, IL",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 17201,
    "name": "Winnebago County, IL",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 17203,
    "name": "Woodford County, IL",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 18001,
    "name": "Adams County, IN",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 18003,
    "name": "Allen County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18005,
    "name": "Bartholomew County, IN",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 18007,
    "name": "Benton County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18009,
    "name": "Blackford County, IN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 18011,
    "name": "Boone County, IN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 18013,
    "name": "Brown County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18015,
    "name": "Carroll County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18017,
    "name": "Cass County, IN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 18019,
    "name": "Clark County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18021,
    "name": "Clay County, IN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 18023,
    "name": "Clinton County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18025,
    "name": "Crawford County, IN",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 18027,
    "name": "Daviess County, IN",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 18029,
    "name": "Dearborn County, IN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 18031,
    "name": "Decatur County, IN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 18033,
    "name": "DeKalb County, IN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 18035,
    "name": "Delaware County, IN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 18037,
    "name": "Dubois County, IN",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 18039,
    "name": "Elkhart County, IN",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 18041,
    "name": "Fayette County, IN",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 18043,
    "name": "Floyd County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18045,
    "name": "Fountain County, IN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 18047,
    "name": "Franklin County, IN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 18049,
    "name": "Fulton County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18051,
    "name": "Gibson County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18053,
    "name": "Grant County, IN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 18055,
    "name": "Greene County, IN",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 18057,
    "name": "Hamilton County, IN",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 18059,
    "name": "Hancock County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18061,
    "name": "Harrison County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18063,
    "name": "Hendricks County, IN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 18065,
    "name": "Henry County, IN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 18067,
    "name": "Howard County, IN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 18069,
    "name": "Huntington County, IN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 18071,
    "name": "Jackson County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18073,
    "name": "Jasper County, IN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 18075,
    "name": "Jay County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18077,
    "name": "Jefferson County, IN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 18079,
    "name": "Jennings County, IN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 18081,
    "name": "Johnson County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18083,
    "name": "Knox County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18085,
    "name": "Kosciusko County, IN",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 18087,
    "name": "LaGrange County, IN",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 18089,
    "name": "Lake County, IN",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 18091,
    "name": "LaPorte County, IN",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 18093,
    "name": "Lawrence County, IN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 18095,
    "name": "Madison County, IN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 18097,
    "name": "Marion County, IN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 18099,
    "name": "Marshall County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18101,
    "name": "Martin County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18103,
    "name": "Miami County, IN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 18105,
    "name": "Monroe County, IN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 18107,
    "name": "Montgomery County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18109,
    "name": "Morgan County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18111,
    "name": "Newton County, IN",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 18113,
    "name": "Noble County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18115,
    "name": "Ohio County, IN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 18117,
    "name": "Orange County, IN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 18119,
    "name": "Owen County, IN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 18121,
    "name": "Parke County, IN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 18123,
    "name": "Perry County, IN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 18125,
    "name": "Pike County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18127,
    "name": "Porter County, IN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 18129,
    "name": "Posey County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18131,
    "name": "Pulaski County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18133,
    "name": "Putnam County, IN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 18135,
    "name": "Randolph County, IN",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 18137,
    "name": "Ripley County, IN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 18139,
    "name": "Rush County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18141,
    "name": "St. Joseph County, IN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 18143,
    "name": "Scott County, IN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 18145,
    "name": "Shelby County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18147,
    "name": "Spencer County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18149,
    "name": "Starke County, IN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 18151,
    "name": "Steuben County, IN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 18153,
    "name": "Sullivan County, IN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 18155,
    "name": "Switzerland County, IN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 18157,
    "name": "Tippecanoe County, IN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 18159,
    "name": "Tipton County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18161,
    "name": "Union County, IN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 18163,
    "name": "Vanderburgh County, IN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 18165,
    "name": "Vermillion County, IN",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 18167,
    "name": "Vigo County, IN",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 18169,
    "name": "Wabash County, IN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 18171,
    "name": "Warren County, IN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 18173,
    "name": "Warrick County, IN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 18175,
    "name": "Washington County, IN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 18177,
    "name": "Wayne County, IN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 18179,
    "name": "Wells County, IN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 18181,
    "name": "White County, IN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 18183,
    "name": "Whitley County, IN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 19001,
    "name": "Adair County, IA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 19003,
    "name": "Adams County, IA",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 19005,
    "name": "Allamakee County, IA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 19007,
    "name": "Appanoose County, IA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 19009,
    "name": "Audubon County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19011,
    "name": "Benton County, IA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 19013,
    "name": "Black Hawk County, IA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 19015,
    "name": "Boone County, IA",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 19017,
    "name": "Bremer County, IA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 19019,
    "name": "Buchanan County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19021,
    "name": "Buena Vista County, IA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 19023,
    "name": "Butler County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19025,
    "name": "Calhoun County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19027,
    "name": "Carroll County, IA",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 19029,
    "name": "Cass County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19031,
    "name": "Cedar County, IA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 19033,
    "name": "Cerro Gordo County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19035,
    "name": "Cherokee County, IA",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 19037,
    "name": "Chickasaw County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19039,
    "name": "Clarke County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19041,
    "name": "Clay County, IA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 19043,
    "name": "Clayton County, IA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 19045,
    "name": "Clinton County, IA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 19047,
    "name": "Crawford County, IA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 19049,
    "name": "Dallas County, IA",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 19051,
    "name": "Davis County, IA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 19053,
    "name": "Decatur County, IA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 19055,
    "name": "Delaware County, IA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 19057,
    "name": "Des Moines County, IA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 19059,
    "name": "Dickinson County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19061,
    "name": "Dubuque County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19063,
    "name": "Emmet County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19065,
    "name": "Fayette County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19067,
    "name": "Floyd County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19069,
    "name": "Franklin County, IA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 19071,
    "name": "Fremont County, IA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 19073,
    "name": "Greene County, IA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 19075,
    "name": "Grundy County, IA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 19077,
    "name": "Guthrie County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19079,
    "name": "Hamilton County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19081,
    "name": "Hancock County, IA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 19083,
    "name": "Hardin County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19085,
    "name": "Harrison County, IA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 19087,
    "name": "Henry County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19089,
    "name": "Howard County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19091,
    "name": "Humboldt County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19093,
    "name": "Ida County, IA",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 19095,
    "name": "Iowa County, IA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 19097,
    "name": "Jackson County, IA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 19099,
    "name": "Jasper County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19101,
    "name": "Jefferson County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19103,
    "name": "Johnson County, IA",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 19105,
    "name": "Jones County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19107,
    "name": "Keokuk County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19109,
    "name": "Kossuth County, IA",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 19111,
    "name": "Lee County, IA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 19113,
    "name": "Linn County, IA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 19115,
    "name": "Louisa County, IA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 19117,
    "name": "Lucas County, IA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 19119,
    "name": "Lyon County, IA",
    "year": 2017,
    "unemployment_rate": 1.7
  },
  {
    "id": 19121,
    "name": "Madison County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19123,
    "name": "Mahaska County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19125,
    "name": "Marion County, IA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 19127,
    "name": "Marshall County, IA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 19129,
    "name": "Mills County, IA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 19131,
    "name": "Mitchell County, IA",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 19133,
    "name": "Monona County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19135,
    "name": "Monroe County, IA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 19137,
    "name": "Montgomery County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19139,
    "name": "Muscatine County, IA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 19141,
    "name": "O'Brien County, IA",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 19143,
    "name": "Osceola County, IA",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 19145,
    "name": "Page County, IA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 19147,
    "name": "Palo Alto County, IA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 19149,
    "name": "Plymouth County, IA",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 19151,
    "name": "Pocahontas County, IA",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 19153,
    "name": "Polk County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19155,
    "name": "Pottawattamie County, IA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 19157,
    "name": "Poweshiek County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19159,
    "name": "Ringgold County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19161,
    "name": "Sac County, IA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 19163,
    "name": "Scott County, IA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 19165,
    "name": "Shelby County, IA",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 19167,
    "name": "Sioux County, IA",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 19169,
    "name": "Story County, IA",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 19171,
    "name": "Tama County, IA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 19173,
    "name": "Taylor County, IA",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 19175,
    "name": "Union County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19177,
    "name": "Van Buren County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19179,
    "name": "Wapello County, IA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 19181,
    "name": "Warren County, IA",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 19183,
    "name": "Washington County, IA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 19185,
    "name": "Wayne County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19187,
    "name": "Webster County, IA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 19189,
    "name": "Winnebago County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19191,
    "name": "Winneshiek County, IA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 19193,
    "name": "Woodbury County, IA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 19195,
    "name": "Worth County, IA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 19197,
    "name": "Wright County, IA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 20001,
    "name": "Allen County, KS",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 20003,
    "name": "Anderson County, KS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 20005,
    "name": "Atchison County, KS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 20007,
    "name": "Barber County, KS",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 20009,
    "name": "Barton County, KS",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 20011,
    "name": "Bourbon County, KS",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 20013,
    "name": "Brown County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20015,
    "name": "Butler County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20017,
    "name": "Chase County, KS",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 20019,
    "name": "Chautauqua County, KS",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 20021,
    "name": "Cherokee County, KS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 20023,
    "name": "Cheyenne County, KS",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 20025,
    "name": "Clark County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20027,
    "name": "Clay County, KS",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 20029,
    "name": "Cloud County, KS",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 20031,
    "name": "Coffey County, KS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 20033,
    "name": "Comanche County, KS",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 20035,
    "name": "Cowley County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20037,
    "name": "Crawford County, KS",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 20039,
    "name": "Decatur County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20041,
    "name": "Dickinson County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20043,
    "name": "Doniphan County, KS",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 20045,
    "name": "Douglas County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20047,
    "name": "Edwards County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20049,
    "name": "Elk County, KS",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 20051,
    "name": "Ellis County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20053,
    "name": "Ellsworth County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20055,
    "name": "Finney County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20057,
    "name": "Ford County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20059,
    "name": "Franklin County, KS",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 20061,
    "name": "Geary County, KS",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 20063,
    "name": "Gove County, KS",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 20065,
    "name": "Graham County, KS",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 20067,
    "name": "Grant County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20069,
    "name": "Gray County, KS",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 20071,
    "name": "Greeley County, KS",
    "year": 2017,
    "unemployment_rate": 1.8
  },
  {
    "id": 20073,
    "name": "Greenwood County, KS",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 20075,
    "name": "Hamilton County, KS",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 20077,
    "name": "Harper County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20079,
    "name": "Harvey County, KS",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 20081,
    "name": "Haskell County, KS",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 20083,
    "name": "Hodgeman County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20085,
    "name": "Jackson County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20087,
    "name": "Jefferson County, KS",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 20089,
    "name": "Jewell County, KS",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 20091,
    "name": "Johnson County, KS",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 20093,
    "name": "Kearny County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20095,
    "name": "Kingman County, KS",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 20097,
    "name": "Kiowa County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20099,
    "name": "Labette County, KS",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 20101,
    "name": "Lane County, KS",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 20103,
    "name": "Leavenworth County, KS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 20105,
    "name": "Lincoln County, KS",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 20107,
    "name": "Linn County, KS",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 20109,
    "name": "Logan County, KS",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 20111,
    "name": "Lyon County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20113,
    "name": "McPherson County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20115,
    "name": "Marion County, KS",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 20117,
    "name": "Marshall County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20119,
    "name": "Meade County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20121,
    "name": "Miami County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20123,
    "name": "Mitchell County, KS",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 20125,
    "name": "Montgomery County, KS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 20127,
    "name": "Morris County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20129,
    "name": "Morton County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20131,
    "name": "Nemaha County, KS",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 20133,
    "name": "Neosho County, KS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 20135,
    "name": "Ness County, KS",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 20137,
    "name": "Norton County, KS",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 20139,
    "name": "Osage County, KS",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 20141,
    "name": "Osborne County, KS",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 20143,
    "name": "Ottawa County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20145,
    "name": "Pawnee County, KS",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 20147,
    "name": "Phillips County, KS",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 20149,
    "name": "Pottawatomie County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20151,
    "name": "Pratt County, KS",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 20153,
    "name": "Rawlins County, KS",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 20155,
    "name": "Reno County, KS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 20157,
    "name": "Republic County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20159,
    "name": "Rice County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20161,
    "name": "Riley County, KS",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 20163,
    "name": "Rooks County, KS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 20165,
    "name": "Rush County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20167,
    "name": "Russell County, KS",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 20169,
    "name": "Saline County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20171,
    "name": "Scott County, KS",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 20173,
    "name": "Sedgwick County, KS",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 20175,
    "name": "Seward County, KS",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 20177,
    "name": "Shawnee County, KS",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 20179,
    "name": "Sheridan County, KS",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 20181,
    "name": "Sherman County, KS",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 20183,
    "name": "Smith County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20185,
    "name": "Stafford County, KS",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 20187,
    "name": "Stanton County, KS",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 20189,
    "name": "Stevens County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20191,
    "name": "Sumner County, KS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 20193,
    "name": "Thomas County, KS",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 20195,
    "name": "Trego County, KS",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 20197,
    "name": "Wabaunsee County, KS",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 20199,
    "name": "Wallace County, KS",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 20201,
    "name": "Washington County, KS",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 20203,
    "name": "Wichita County, KS",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 20205,
    "name": "Wilson County, KS",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 20207,
    "name": "Woodson County, KS",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 20209,
    "name": "Wyandotte County, KS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 21001,
    "name": "Adair County, KY",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 21003,
    "name": "Allen County, KY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 21005,
    "name": "Anderson County, KY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 21007,
    "name": "Ballard County, KY",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 21009,
    "name": "Barren County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21011,
    "name": "Bath County, KY",
    "year": 2017,
    "unemployment_rate": 7.9
  },
  {
    "id": 21013,
    "name": "Bell County, KY",
    "year": 2017,
    "unemployment_rate": 7.9
  },
  {
    "id": 21015,
    "name": "Boone County, KY",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 21017,
    "name": "Bourbon County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21019,
    "name": "Boyd County, KY",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 21021,
    "name": "Boyle County, KY",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 21023,
    "name": "Bracken County, KY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 21025,
    "name": "Breathitt County, KY",
    "year": 2017,
    "unemployment_rate": 8.8
  },
  {
    "id": 21027,
    "name": "Breckinridge County, KY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 21029,
    "name": "Bullitt County, KY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 21031,
    "name": "Butler County, KY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 21033,
    "name": "Caldwell County, KY",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 21035,
    "name": "Calloway County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21037,
    "name": "Campbell County, KY",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 21039,
    "name": "Carlisle County, KY",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 21041,
    "name": "Carroll County, KY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 21043,
    "name": "Carter County, KY",
    "year": 2017,
    "unemployment_rate": 9.9
  },
  {
    "id": 21045,
    "name": "Casey County, KY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 21047,
    "name": "Christian County, KY",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 21049,
    "name": "Clark County, KY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 21051,
    "name": "Clay County, KY",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": 21053,
    "name": "Clinton County, KY",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 21055,
    "name": "Crittenden County, KY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 21057,
    "name": "Cumberland County, KY",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 21059,
    "name": "Daviess County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21061,
    "name": "Edmonson County, KY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 21063,
    "name": "Elliott County, KY",
    "year": 2017,
    "unemployment_rate": 10.7
  },
  {
    "id": 21065,
    "name": "Estill County, KY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 21067,
    "name": "Fayette County, KY",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 21069,
    "name": "Fleming County, KY",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 21071,
    "name": "Floyd County, KY",
    "year": 2017,
    "unemployment_rate": 8.4
  },
  {
    "id": 21073,
    "name": "Franklin County, KY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 21075,
    "name": "Fulton County, KY",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 21077,
    "name": "Gallatin County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21079,
    "name": "Garrard County, KY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 21081,
    "name": "Grant County, KY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 21083,
    "name": "Graves County, KY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 21085,
    "name": "Grayson County, KY",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 21087,
    "name": "Green County, KY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 21089,
    "name": "Greenup County, KY",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 21091,
    "name": "Hancock County, KY",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 21093,
    "name": "Hardin County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21095,
    "name": "Harlan County, KY",
    "year": 2017,
    "unemployment_rate": 10
  },
  {
    "id": 21097,
    "name": "Harrison County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21099,
    "name": "Hart County, KY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 21101,
    "name": "Henderson County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21103,
    "name": "Henry County, KY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 21105,
    "name": "Hickman County, KY",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 21107,
    "name": "Hopkins County, KY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 21109,
    "name": "Jackson County, KY",
    "year": 2017,
    "unemployment_rate": 8.5
  },
  {
    "id": 21111,
    "name": "Jefferson County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21113,
    "name": "Jessamine County, KY",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 21115,
    "name": "Johnson County, KY",
    "year": 2017,
    "unemployment_rate": 8.7
  },
  {
    "id": 21117,
    "name": "Kenton County, KY",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 21119,
    "name": "Knott County, KY",
    "year": 2017,
    "unemployment_rate": 8.6
  },
  {
    "id": 21121,
    "name": "Knox County, KY",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 21123,
    "name": "Larue County, KY",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 21125,
    "name": "Laurel County, KY",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 21127,
    "name": "Lawrence County, KY",
    "year": 2017,
    "unemployment_rate": 9.1
  },
  {
    "id": 21129,
    "name": "Lee County, KY",
    "year": 2017,
    "unemployment_rate": 8.5
  },
  {
    "id": 21131,
    "name": "Leslie County, KY",
    "year": 2017,
    "unemployment_rate": 10.2
  },
  {
    "id": 21133,
    "name": "Letcher County, KY",
    "year": 2017,
    "unemployment_rate": 9.4
  },
  {
    "id": 21135,
    "name": "Lewis County, KY",
    "year": 2017,
    "unemployment_rate": 9.3
  },
  {
    "id": 21137,
    "name": "Lincoln County, KY",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 21139,
    "name": "Livingston County, KY",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 21141,
    "name": "Logan County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21143,
    "name": "Lyon County, KY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 21145,
    "name": "McCracken County, KY",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 21147,
    "name": "McCreary County, KY",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 21149,
    "name": "McLean County, KY",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 21151,
    "name": "Madison County, KY",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 21153,
    "name": "Magoffin County, KY",
    "year": 2017,
    "unemployment_rate": 16.3
  },
  {
    "id": 21155,
    "name": "Marion County, KY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 21157,
    "name": "Marshall County, KY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 21159,
    "name": "Martin County, KY",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 21161,
    "name": "Mason County, KY",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 21163,
    "name": "Meade County, KY",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 21165,
    "name": "Menifee County, KY",
    "year": 2017,
    "unemployment_rate": 8.8
  },
  {
    "id": 21167,
    "name": "Mercer County, KY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 21169,
    "name": "Metcalfe County, KY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 21171,
    "name": "Monroe County, KY",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 21173,
    "name": "Montgomery County, KY",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 21175,
    "name": "Morgan County, KY",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 21177,
    "name": "Muhlenberg County, KY",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 21179,
    "name": "Nelson County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21181,
    "name": "Nicholas County, KY",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 21183,
    "name": "Ohio County, KY",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 21185,
    "name": "Oldham County, KY",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 21187,
    "name": "Owen County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21189,
    "name": "Owsley County, KY",
    "year": 2017,
    "unemployment_rate": 8.4
  },
  {
    "id": 21191,
    "name": "Pendleton County, KY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 21193,
    "name": "Perry County, KY",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 21195,
    "name": "Pike County, KY",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": 21197,
    "name": "Powell County, KY",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 21199,
    "name": "Pulaski County, KY",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 21201,
    "name": "Robertson County, KY",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 21203,
    "name": "Rockcastle County, KY",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 21205,
    "name": "Rowan County, KY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 21207,
    "name": "Russell County, KY",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 21209,
    "name": "Scott County, KY",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 21211,
    "name": "Shelby County, KY",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 21213,
    "name": "Simpson County, KY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 21215,
    "name": "Spencer County, KY",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 21217,
    "name": "Taylor County, KY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 21219,
    "name": "Todd County, KY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 21221,
    "name": "Trigg County, KY",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 21223,
    "name": "Trimble County, KY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 21225,
    "name": "Union County, KY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 21227,
    "name": "Warren County, KY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 21229,
    "name": "Washington County, KY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 21231,
    "name": "Wayne County, KY",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": 21233,
    "name": "Webster County, KY",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 21235,
    "name": "Whitley County, KY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 21237,
    "name": "Wolfe County, KY",
    "year": 2017,
    "unemployment_rate": 9.2
  },
  {
    "id": 21239,
    "name": "Woodford County, KY",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 22001,
    "name": "Acadia Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 22003,
    "name": "Allen Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 22005,
    "name": "Ascension Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 22007,
    "name": "Assumption Parish, LA",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 22009,
    "name": "Avoyelles Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 22011,
    "name": "Beauregard Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 22013,
    "name": "Bienville Parish, LA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 22015,
    "name": "Bossier Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 22017,
    "name": "Caddo Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 22019,
    "name": "Calcasieu Parish, LA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 22021,
    "name": "Caldwell Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 22023,
    "name": "Cameron Parish, LA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 22025,
    "name": "Catahoula Parish, LA",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 22027,
    "name": "Claiborne Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 22029,
    "name": "Concordia Parish, LA",
    "year": 2017,
    "unemployment_rate": 7.9
  },
  {
    "id": 22031,
    "name": "De Soto Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 22033,
    "name": "East Baton Rouge Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 22035,
    "name": "East Carroll Parish, LA",
    "year": 2017,
    "unemployment_rate": 11.1
  },
  {
    "id": 22037,
    "name": "East Feliciana Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 22039,
    "name": "Evangeline Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 22041,
    "name": "Franklin Parish, LA",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 22043,
    "name": "Grant Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 22045,
    "name": "Iberia Parish, LA",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 22047,
    "name": "Iberville Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 22049,
    "name": "Jackson Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 22051,
    "name": "Jefferson Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 22053,
    "name": "Jefferson Davis Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 22055,
    "name": "Lafayette Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 22057,
    "name": "Lafourche Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 22059,
    "name": "LaSalle Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 22061,
    "name": "Lincoln Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 22063,
    "name": "Livingston Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 22065,
    "name": "Madison Parish, LA",
    "year": 2017,
    "unemployment_rate": 8.1
  },
  {
    "id": 22067,
    "name": "Morehouse Parish, LA",
    "year": 2017,
    "unemployment_rate": 8
  },
  {
    "id": 22069,
    "name": "Natchitoches Parish, LA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 22071,
    "name": "Orleans Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 22073,
    "name": "Ouachita Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 22075,
    "name": "Plaquemines Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 22077,
    "name": "Pointe Coupee Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 22079,
    "name": "Rapides Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 22081,
    "name": "Red River Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 22083,
    "name": "Richland Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 22085,
    "name": "Sabine Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 22087,
    "name": "St. Bernard Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 22089,
    "name": "St. Charles Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 22091,
    "name": "St. Helena Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 22093,
    "name": "St. James Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 22095,
    "name": "St. John the Baptist Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 22097,
    "name": "St. Landry Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 22099,
    "name": "St. Martin Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 22101,
    "name": "St. Mary Parish, LA",
    "year": 2017,
    "unemployment_rate": 7.9
  },
  {
    "id": 22103,
    "name": "St. Tammany Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 22105,
    "name": "Tangipahoa Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 22107,
    "name": "Tensas Parish, LA",
    "year": 2017,
    "unemployment_rate": 8.5
  },
  {
    "id": 22109,
    "name": "Terrebonne Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 22111,
    "name": "Union Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 22113,
    "name": "Vermilion Parish, LA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 22115,
    "name": "Vernon Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 22117,
    "name": "Washington Parish, LA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 22119,
    "name": "Webster Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 22121,
    "name": "West Baton Rouge Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 22123,
    "name": "West Carroll Parish, LA",
    "year": 2017,
    "unemployment_rate": 9.8
  },
  {
    "id": 22125,
    "name": "West Feliciana Parish, LA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 22127,
    "name": "Winn Parish, LA",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 23001,
    "name": "Androscoggin County, ME",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 23003,
    "name": "Aroostook County, ME",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 23005,
    "name": "Cumberland County, ME",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 23007,
    "name": "Franklin County, ME",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 23009,
    "name": "Hancock County, ME",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 23011,
    "name": "Kennebec County, ME",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 23013,
    "name": "Knox County, ME",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 23015,
    "name": "Lincoln County, ME",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 23017,
    "name": "Oxford County, ME",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 23019,
    "name": "Penobscot County, ME",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 23021,
    "name": "Piscataquis County, ME",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 23023,
    "name": "Sagadahoc County, ME",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 23025,
    "name": "Somerset County, ME",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 23027,
    "name": "Waldo County, ME",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 23029,
    "name": "Washington County, ME",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 23031,
    "name": "York County, ME",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 24001,
    "name": "Allegany County, MD",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 24003,
    "name": "Anne Arundel County, MD",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 24005,
    "name": "Baltimore County, MD",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 24009,
    "name": "Calvert County, MD",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 24011,
    "name": "Caroline County, MD",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 24013,
    "name": "Carroll County, MD",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 24015,
    "name": "Cecil County, MD",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 24017,
    "name": "Charles County, MD",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 24019,
    "name": "Dorchester County, MD",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 24021,
    "name": "Frederick County, MD",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 24023,
    "name": "Garrett County, MD",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 24025,
    "name": "Harford County, MD",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 24027,
    "name": "Howard County, MD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 24029,
    "name": "Kent County, MD",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 24031,
    "name": "Montgomery County, MD",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 24033,
    "name": "Prince George's County, MD",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 24035,
    "name": "Queen Anne's County, MD",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 24037,
    "name": "St. Mary's County, MD",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 24039,
    "name": "Somerset County, MD",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 24041,
    "name": "Talbot County, MD",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 24043,
    "name": "Washington County, MD",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 24045,
    "name": "Wicomico County, MD",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 24047,
    "name": "Worcester County, MD",
    "year": 2017,
    "unemployment_rate": 8.8
  },
  {
    "id": 24510,
    "name": "Baltimore city, MD",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 25001,
    "name": "Barnstable County, MA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 25003,
    "name": "Berkshire County, MA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 25005,
    "name": "Bristol County, MA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 25007,
    "name": "Dukes County, MA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 25009,
    "name": "Essex County, MA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 25011,
    "name": "Franklin County, MA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 25013,
    "name": "Hampden County, MA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 25015,
    "name": "Hampshire County, MA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 25017,
    "name": "Middlesex County, MA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 25019,
    "name": "Nantucket County/town, MA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 25021,
    "name": "Norfolk County, MA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 25023,
    "name": "Plymouth County, MA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 25025,
    "name": "Suffolk County, MA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 25027,
    "name": "Worcester County, MA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 26001,
    "name": "Alcona County, MI",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 26003,
    "name": "Alger County, MI",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 26005,
    "name": "Allegan County, MI",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 26007,
    "name": "Alpena County, MI",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 26009,
    "name": "Antrim County, MI",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 26011,
    "name": "Arenac County, MI",
    "year": 2017,
    "unemployment_rate": 8
  },
  {
    "id": 26013,
    "name": "Baraga County, MI",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 26015,
    "name": "Barry County, MI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 26017,
    "name": "Bay County, MI",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 26019,
    "name": "Benzie County, MI",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 26021,
    "name": "Berrien County, MI",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 26023,
    "name": "Branch County, MI",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 26025,
    "name": "Calhoun County, MI",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 26027,
    "name": "Cass County, MI",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 26029,
    "name": "Charlevoix County, MI",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 26031,
    "name": "Cheboygan County, MI",
    "year": 2017,
    "unemployment_rate": 10
  },
  {
    "id": 26033,
    "name": "Chippewa County, MI",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 26035,
    "name": "Clare County, MI",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 26037,
    "name": "Clinton County, MI",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 26039,
    "name": "Crawford County, MI",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 26041,
    "name": "Delta County, MI",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 26043,
    "name": "Dickinson County, MI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 26045,
    "name": "Eaton County, MI",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 26047,
    "name": "Emmet County, MI",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 26049,
    "name": "Genesee County, MI",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 26051,
    "name": "Gladwin County, MI",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 26053,
    "name": "Gogebic County, MI",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 26055,
    "name": "Grand Traverse County, MI",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 26057,
    "name": "Gratiot County, MI",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 26059,
    "name": "Hillsdale County, MI",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 26061,
    "name": "Houghton County, MI",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 26063,
    "name": "Huron County, MI",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 26065,
    "name": "Ingham County, MI",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 26067,
    "name": "Ionia County, MI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 26069,
    "name": "Iosco County, MI",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 26071,
    "name": "Iron County, MI",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 26073,
    "name": "Isabella County, MI",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 26075,
    "name": "Jackson County, MI",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 26077,
    "name": "Kalamazoo County, MI",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 26079,
    "name": "Kalkaska County, MI",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 26081,
    "name": "Kent County, MI",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 26083,
    "name": "Keweenaw County, MI",
    "year": 2017,
    "unemployment_rate": 8.7
  },
  {
    "id": 26085,
    "name": "Lake County, MI",
    "year": 2017,
    "unemployment_rate": 8.1
  },
  {
    "id": 26087,
    "name": "Lapeer County, MI",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 26089,
    "name": "Leelanau County, MI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 26091,
    "name": "Lenawee County, MI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 26093,
    "name": "Livingston County, MI",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 26095,
    "name": "Luce County, MI",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 26097,
    "name": "Mackinac County, MI",
    "year": 2017,
    "unemployment_rate": 10.1
  },
  {
    "id": 26099,
    "name": "Macomb County, MI",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 26101,
    "name": "Manistee County, MI",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 26103,
    "name": "Marquette County, MI",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 26105,
    "name": "Mason County, MI",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 26107,
    "name": "Mecosta County, MI",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 26109,
    "name": "Menominee County, MI",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 26111,
    "name": "Midland County, MI",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 26113,
    "name": "Missaukee County, MI",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 26115,
    "name": "Monroe County, MI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 26117,
    "name": "Montcalm County, MI",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 26119,
    "name": "Montmorency County, MI",
    "year": 2017,
    "unemployment_rate": 10.4
  },
  {
    "id": 26121,
    "name": "Muskegon County, MI",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 26123,
    "name": "Newaygo County, MI",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 26125,
    "name": "Oakland County, MI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 26127,
    "name": "Oceana County, MI",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 26129,
    "name": "Ogemaw County, MI",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 26131,
    "name": "Ontonagon County, MI",
    "year": 2017,
    "unemployment_rate": 8.7
  },
  {
    "id": 26133,
    "name": "Osceola County, MI",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 26135,
    "name": "Oscoda County, MI",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 26137,
    "name": "Otsego County, MI",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 26139,
    "name": "Ottawa County, MI",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 26141,
    "name": "Presque Isle County, MI",
    "year": 2017,
    "unemployment_rate": 9.2
  },
  {
    "id": 26143,
    "name": "Roscommon County, MI",
    "year": 2017,
    "unemployment_rate": 8.8
  },
  {
    "id": 26145,
    "name": "Saginaw County, MI",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 26147,
    "name": "St. Clair County, MI",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 26149,
    "name": "St. Joseph County, MI",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 26151,
    "name": "Sanilac County, MI",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 26153,
    "name": "Schoolcraft County, MI",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 26155,
    "name": "Shiawassee County, MI",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 26157,
    "name": "Tuscola County, MI",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 26159,
    "name": "Van Buren County, MI",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 26161,
    "name": "Washtenaw County, MI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 26163,
    "name": "Wayne County, MI",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 26165,
    "name": "Wexford County, MI",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 27001,
    "name": "Aitkin County, MN",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 27003,
    "name": "Anoka County, MN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 27005,
    "name": "Becker County, MN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 27007,
    "name": "Beltrami County, MN",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 27009,
    "name": "Benton County, MN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 27011,
    "name": "Big Stone County, MN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 27013,
    "name": "Blue Earth County, MN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 27015,
    "name": "Brown County, MN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 27017,
    "name": "Carlton County, MN",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 27019,
    "name": "Carver County, MN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 27021,
    "name": "Cass County, MN",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 27023,
    "name": "Chippewa County, MN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 27025,
    "name": "Chisago County, MN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 27027,
    "name": "Clay County, MN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 27029,
    "name": "Clearwater County, MN",
    "year": 2017,
    "unemployment_rate": 8.7
  },
  {
    "id": 27031,
    "name": "Cook County, MN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 27033,
    "name": "Cottonwood County, MN",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 27035,
    "name": "Crow Wing County, MN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 27037,
    "name": "Dakota County, MN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 27039,
    "name": "Dodge County, MN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 27041,
    "name": "Douglas County, MN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 27043,
    "name": "Faribault County, MN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 27045,
    "name": "Fillmore County, MN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 27047,
    "name": "Freeborn County, MN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 27049,
    "name": "Goodhue County, MN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 27051,
    "name": "Grant County, MN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 27053,
    "name": "Hennepin County, MN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 27055,
    "name": "Houston County, MN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 27057,
    "name": "Hubbard County, MN",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 27059,
    "name": "Isanti County, MN",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 27061,
    "name": "Itasca County, MN",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 27063,
    "name": "Jackson County, MN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 27065,
    "name": "Kanabec County, MN",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 27067,
    "name": "Kandiyohi County, MN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 27069,
    "name": "Kittson County, MN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 27071,
    "name": "Koochiching County, MN",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 27073,
    "name": "Lac qui Parle County, MN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 27075,
    "name": "Lake County, MN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 27077,
    "name": "Lake of the Woods County, MN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 27079,
    "name": "Le Sueur County, MN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 27081,
    "name": "Lincoln County, MN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 27083,
    "name": "Lyon County, MN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 27085,
    "name": "McLeod County, MN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 27087,
    "name": "Mahnomen County, MN",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 27089,
    "name": "Marshall County, MN",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 27091,
    "name": "Martin County, MN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 27093,
    "name": "Meeker County, MN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 27095,
    "name": "Mille Lacs County, MN",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 27097,
    "name": "Morrison County, MN",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 27099,
    "name": "Mower County, MN",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 27101,
    "name": "Murray County, MN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 27103,
    "name": "Nicollet County, MN",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 27105,
    "name": "Nobles County, MN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 27107,
    "name": "Norman County, MN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 27109,
    "name": "Olmsted County, MN",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 27111,
    "name": "Otter Tail County, MN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 27113,
    "name": "Pennington County, MN",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 27115,
    "name": "Pine County, MN",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 27117,
    "name": "Pipestone County, MN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 27119,
    "name": "Polk County, MN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 27121,
    "name": "Pope County, MN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 27123,
    "name": "Ramsey County, MN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 27125,
    "name": "Red Lake County, MN",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 27127,
    "name": "Redwood County, MN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 27129,
    "name": "Renville County, MN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 27131,
    "name": "Rice County, MN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 27133,
    "name": "Rock County, MN",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 27135,
    "name": "Roseau County, MN",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 27137,
    "name": "St. Louis County, MN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 27139,
    "name": "Scott County, MN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 27141,
    "name": "Sherburne County, MN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 27143,
    "name": "Sibley County, MN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 27145,
    "name": "Stearns County, MN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 27147,
    "name": "Steele County, MN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 27149,
    "name": "Stevens County, MN",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 27151,
    "name": "Swift County, MN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 27153,
    "name": "Todd County, MN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 27155,
    "name": "Traverse County, MN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 27157,
    "name": "Wabasha County, MN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 27159,
    "name": "Wadena County, MN",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 27161,
    "name": "Waseca County, MN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 27163,
    "name": "Washington County, MN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 27165,
    "name": "Watonwan County, MN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 27167,
    "name": "Wilkin County, MN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 27169,
    "name": "Winona County, MN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 27171,
    "name": "Wright County, MN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 27173,
    "name": "Yellow Medicine County, MN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 28001,
    "name": "Adams County, MS",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 28003,
    "name": "Alcorn County, MS",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 28005,
    "name": "Amite County, MS",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 28007,
    "name": "Attala County, MS",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 28009,
    "name": "Benton County, MS",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 28011,
    "name": "Bolivar County, MS",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 28013,
    "name": "Calhoun County, MS",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 28015,
    "name": "Carroll County, MS",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 28017,
    "name": "Chickasaw County, MS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 28019,
    "name": "Choctaw County, MS",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 28021,
    "name": "Claiborne County, MS",
    "year": 2017,
    "unemployment_rate": 9.9
  },
  {
    "id": 28023,
    "name": "Clarke County, MS",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 28025,
    "name": "Clay County, MS",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 28027,
    "name": "Coahoma County, MS",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 28029,
    "name": "Copiah County, MS",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 28031,
    "name": "Covington County, MS",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 28033,
    "name": "DeSoto County, MS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 28035,
    "name": "Forrest County, MS",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 28037,
    "name": "Franklin County, MS",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 28039,
    "name": "George County, MS",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 28041,
    "name": "Greene County, MS",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 28043,
    "name": "Grenada County, MS",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 28045,
    "name": "Hancock County, MS",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 28047,
    "name": "Harrison County, MS",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 28049,
    "name": "Hinds County, MS",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 28051,
    "name": "Holmes County, MS",
    "year": 2017,
    "unemployment_rate": 9.4
  },
  {
    "id": 28053,
    "name": "Humphreys County, MS",
    "year": 2017,
    "unemployment_rate": 9.1
  },
  {
    "id": 28055,
    "name": "Issaquena County, MS",
    "year": 2017,
    "unemployment_rate": 11.8
  },
  {
    "id": 28057,
    "name": "Itawamba County, MS",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 28059,
    "name": "Jackson County, MS",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 28061,
    "name": "Jasper County, MS",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 28063,
    "name": "Jefferson County, MS",
    "year": 2017,
    "unemployment_rate": 14.9
  },
  {
    "id": 28065,
    "name": "Jefferson Davis County, MS",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 28067,
    "name": "Jones County, MS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 28069,
    "name": "Kemper County, MS",
    "year": 2017,
    "unemployment_rate": 7.9
  },
  {
    "id": 28071,
    "name": "Lafayette County, MS",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 28073,
    "name": "Lamar County, MS",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 28075,
    "name": "Lauderdale County, MS",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 28077,
    "name": "Lawrence County, MS",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 28079,
    "name": "Leake County, MS",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 28081,
    "name": "Lee County, MS",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 28083,
    "name": "Leflore County, MS",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 28085,
    "name": "Lincoln County, MS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 28087,
    "name": "Lowndes County, MS",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 28089,
    "name": "Madison County, MS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 28091,
    "name": "Marion County, MS",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 28093,
    "name": "Marshall County, MS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 28095,
    "name": "Monroe County, MS",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 28097,
    "name": "Montgomery County, MS",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 28099,
    "name": "Neshoba County, MS",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 28101,
    "name": "Newton County, MS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 28103,
    "name": "Noxubee County, MS",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 28105,
    "name": "Oktibbeha County, MS",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 28107,
    "name": "Panola County, MS",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 28109,
    "name": "Pearl River County, MS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 28111,
    "name": "Perry County, MS",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 28113,
    "name": "Pike County, MS",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 28115,
    "name": "Pontotoc County, MS",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 28117,
    "name": "Prentiss County, MS",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 28119,
    "name": "Quitman County, MS",
    "year": 2017,
    "unemployment_rate": 8.8
  },
  {
    "id": 28121,
    "name": "Rankin County, MS",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 28123,
    "name": "Scott County, MS",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 28125,
    "name": "Sharkey County, MS",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 28127,
    "name": "Simpson County, MS",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 28129,
    "name": "Smith County, MS",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 28131,
    "name": "Stone County, MS",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 28133,
    "name": "Sunflower County, MS",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 28135,
    "name": "Tallahatchie County, MS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 28137,
    "name": "Tate County, MS",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 28139,
    "name": "Tippah County, MS",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 28141,
    "name": "Tishomingo County, MS",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 28143,
    "name": "Tunica County, MS",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 28145,
    "name": "Union County, MS",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 28147,
    "name": "Walthall County, MS",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 28149,
    "name": "Warren County, MS",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 28151,
    "name": "Washington County, MS",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 28153,
    "name": "Wayne County, MS",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 28155,
    "name": "Webster County, MS",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 28157,
    "name": "Wilkinson County, MS",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": 28159,
    "name": "Winston County, MS",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 28161,
    "name": "Yalobusha County, MS",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 28163,
    "name": "Yazoo County, MS",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 29001,
    "name": "Adair County, MO",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 29003,
    "name": "Andrew County, MO",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 29005,
    "name": "Atchison County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29007,
    "name": "Audrain County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29009,
    "name": "Barry County, MO",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 29011,
    "name": "Barton County, MO",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 29013,
    "name": "Bates County, MO",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 29015,
    "name": "Benton County, MO",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 29017,
    "name": "Bollinger County, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 29019,
    "name": "Boone County, MO",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 29021,
    "name": "Buchanan County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29023,
    "name": "Butler County, MO",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 29025,
    "name": "Caldwell County, MO",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 29027,
    "name": "Callaway County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29029,
    "name": "Camden County, MO",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 29031,
    "name": "Cape Girardeau County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29033,
    "name": "Carroll County, MO",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 29035,
    "name": "Carter County, MO",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 29037,
    "name": "Cass County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29039,
    "name": "Cedar County, MO",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 29041,
    "name": "Chariton County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29043,
    "name": "Christian County, MO",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 29045,
    "name": "Clark County, MO",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 29047,
    "name": "Clay County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29049,
    "name": "Clinton County, MO",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 29051,
    "name": "Cole County, MO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 29053,
    "name": "Cooper County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29055,
    "name": "Crawford County, MO",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 29057,
    "name": "Dade County, MO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 29059,
    "name": "Dallas County, MO",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 29061,
    "name": "Daviess County, MO",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 29063,
    "name": "DeKalb County, MO",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 29065,
    "name": "Dent County, MO",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 29067,
    "name": "Douglas County, MO",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 29069,
    "name": "Dunklin County, MO",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 29071,
    "name": "Franklin County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29073,
    "name": "Gasconade County, MO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 29075,
    "name": "Gentry County, MO",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 29077,
    "name": "Greene County, MO",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 29079,
    "name": "Grundy County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29081,
    "name": "Harrison County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29083,
    "name": "Henry County, MO",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 29085,
    "name": "Hickory County, MO",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 29087,
    "name": "Holt County, MO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 29089,
    "name": "Howard County, MO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 29091,
    "name": "Howell County, MO",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 29093,
    "name": "Iron County, MO",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 29095,
    "name": "Jackson County, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 29097,
    "name": "Jasper County, MO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 29099,
    "name": "Jefferson County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29101,
    "name": "Johnson County, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 29103,
    "name": "Knox County, MO",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 29105,
    "name": "Laclede County, MO",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 29107,
    "name": "Lafayette County, MO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 29109,
    "name": "Lawrence County, MO",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 29111,
    "name": "Lewis County, MO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 29113,
    "name": "Lincoln County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29115,
    "name": "Linn County, MO",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 29117,
    "name": "Livingston County, MO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 29119,
    "name": "McDonald County, MO",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 29121,
    "name": "Macon County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29123,
    "name": "Madison County, MO",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 29125,
    "name": "Maries County, MO",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 29127,
    "name": "Marion County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29129,
    "name": "Mercer County, MO",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 29131,
    "name": "Miller County, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 29133,
    "name": "Mississippi County, MO",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 29135,
    "name": "Moniteau County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29137,
    "name": "Monroe County, MO",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 29139,
    "name": "Montgomery County, MO",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 29141,
    "name": "Morgan County, MO",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 29143,
    "name": "New Madrid County, MO",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 29145,
    "name": "Newton County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29147,
    "name": "Nodaway County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29149,
    "name": "Oregon County, MO",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 29151,
    "name": "Osage County, MO",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 29153,
    "name": "Ozark County, MO",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 29155,
    "name": "Pemiscot County, MO",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 29157,
    "name": "Perry County, MO",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 29159,
    "name": "Pettis County, MO",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 29161,
    "name": "Phelps County, MO",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 29163,
    "name": "Pike County, MO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 29165,
    "name": "Platte County, MO",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 29167,
    "name": "Polk County, MO",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 29169,
    "name": "Pulaski County, MO",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 29171,
    "name": "Putnam County, MO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 29173,
    "name": "Ralls County, MO",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 29175,
    "name": "Randolph County, MO",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 29177,
    "name": "Ray County, MO",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 29179,
    "name": "Reynolds County, MO",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 29181,
    "name": "Ripley County, MO",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 29183,
    "name": "St. Charles County, MO",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 29185,
    "name": "St. Clair County, MO",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 29186,
    "name": "Ste. Genevieve County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29187,
    "name": "St. Francois County, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 29189,
    "name": "St. Louis County, MO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 29195,
    "name": "Saline County, MO",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 29197,
    "name": "Schuyler County, MO",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 29199,
    "name": "Scotland County, MO",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 29201,
    "name": "Scott County, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 29203,
    "name": "Shannon County, MO",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 29205,
    "name": "Shelby County, MO",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 29207,
    "name": "Stoddard County, MO",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 29209,
    "name": "Stone County, MO",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 29211,
    "name": "Sullivan County, MO",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 29213,
    "name": "Taney County, MO",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 29215,
    "name": "Texas County, MO",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 29217,
    "name": "Vernon County, MO",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 29219,
    "name": "Warren County, MO",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 29221,
    "name": "Washington County, MO",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 29223,
    "name": "Wayne County, MO",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 29225,
    "name": "Webster County, MO",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 29227,
    "name": "Worth County, MO",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 29229,
    "name": "Wright County, MO",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 29510,
    "name": "St. Louis city, MO",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 30001,
    "name": "Beaverhead County, MT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 30003,
    "name": "Big Horn County, MT",
    "year": 2017,
    "unemployment_rate": 13.2
  },
  {
    "id": 30005,
    "name": "Blaine County, MT",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 30007,
    "name": "Broadwater County, MT",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 30009,
    "name": "Carbon County, MT",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 30011,
    "name": "Carter County, MT",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 30013,
    "name": "Cascade County, MT",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 30015,
    "name": "Chouteau County, MT",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 30017,
    "name": "Custer County, MT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 30019,
    "name": "Daniels County, MT",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 30021,
    "name": "Dawson County, MT",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 30023,
    "name": "Deer Lodge County, MT",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 30025,
    "name": "Fallon County, MT",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 30027,
    "name": "Fergus County, MT",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 30029,
    "name": "Flathead County, MT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 30031,
    "name": "Gallatin County, MT",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 30033,
    "name": "Garfield County, MT",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 30035,
    "name": "Glacier County, MT",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": 30037,
    "name": "Golden Valley County, MT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 30039,
    "name": "Granite County, MT",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 30041,
    "name": "Hill County, MT",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 30043,
    "name": "Jefferson County, MT",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 30045,
    "name": "Judith Basin County, MT",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 30047,
    "name": "Lake County, MT",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 30049,
    "name": "Lewis and Clark County, MT",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 30051,
    "name": "Liberty County, MT",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 30053,
    "name": "Lincoln County, MT",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 30055,
    "name": "McCone County, MT",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 30057,
    "name": "Madison County, MT",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 30059,
    "name": "Meagher County, MT",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 30061,
    "name": "Mineral County, MT",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 30063,
    "name": "Missoula County, MT",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 30065,
    "name": "Musselshell County, MT",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 30067,
    "name": "Park County, MT",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 30069,
    "name": "Petroleum County, MT",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 30071,
    "name": "Phillips County, MT",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 30073,
    "name": "Pondera County, MT",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 30075,
    "name": "Powder River County, MT",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 30077,
    "name": "Powell County, MT",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 30079,
    "name": "Prairie County, MT",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 30081,
    "name": "Ravalli County, MT",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 30083,
    "name": "Richland County, MT",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 30085,
    "name": "Roosevelt County, MT",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 30087,
    "name": "Rosebud County, MT",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 30089,
    "name": "Sanders County, MT",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 30091,
    "name": "Sheridan County, MT",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 30093,
    "name": "Silver Bow County, MT",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 30095,
    "name": "Stillwater County, MT",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 30097,
    "name": "Sweet Grass County, MT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 30099,
    "name": "Teton County, MT",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 30101,
    "name": "Toole County, MT",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 30103,
    "name": "Treasure County, MT",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 30105,
    "name": "Valley County, MT",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 30107,
    "name": "Wheatland County, MT",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 30109,
    "name": "Wibaux County, MT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 30111,
    "name": "Yellowstone County, MT",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 31001,
    "name": "Adams County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31003,
    "name": "Antelope County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31005,
    "name": "Arthur County, NE",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 31007,
    "name": "Banner County, NE",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 31009,
    "name": "Blaine County, NE",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 31011,
    "name": "Boone County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31013,
    "name": "Box Butte County, NE",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 31015,
    "name": "Boyd County, NE",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 31017,
    "name": "Brown County, NE",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 31019,
    "name": "Buffalo County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31021,
    "name": "Burt County, NE",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 31023,
    "name": "Butler County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31025,
    "name": "Cass County, NE",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 31027,
    "name": "Cedar County, NE",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 31029,
    "name": "Chase County, NE",
    "year": 2017,
    "unemployment_rate": 1.8
  },
  {
    "id": 31031,
    "name": "Cherry County, NE",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 31033,
    "name": "Cheyenne County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31035,
    "name": "Clay County, NE",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 31037,
    "name": "Colfax County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31039,
    "name": "Cuming County, NE",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 31041,
    "name": "Custer County, NE",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 31043,
    "name": "Dakota County, NE",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 31045,
    "name": "Dawes County, NE",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 31047,
    "name": "Dawson County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31049,
    "name": "Deuel County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31051,
    "name": "Dixon County, NE",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 31053,
    "name": "Dodge County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31055,
    "name": "Douglas County, NE",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 31057,
    "name": "Dundy County, NE",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 31059,
    "name": "Fillmore County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31061,
    "name": "Franklin County, NE",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 31063,
    "name": "Frontier County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31065,
    "name": "Furnas County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31067,
    "name": "Gage County, NE",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 31069,
    "name": "Garden County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31071,
    "name": "Garfield County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31073,
    "name": "Gosper County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31075,
    "name": "Grant County, NE",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 31077,
    "name": "Greeley County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31079,
    "name": "Hall County, NE",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 31081,
    "name": "Hamilton County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31083,
    "name": "Harlan County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31085,
    "name": "Hayes County, NE",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 31087,
    "name": "Hitchcock County, NE",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 31089,
    "name": "Holt County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31091,
    "name": "Hooker County, NE",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 31093,
    "name": "Howard County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31095,
    "name": "Jefferson County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31097,
    "name": "Johnson County, NE",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 31099,
    "name": "Kearney County, NE",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 31101,
    "name": "Keith County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31103,
    "name": "Keya Paha County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31105,
    "name": "Kimball County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31107,
    "name": "Knox County, NE",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 31109,
    "name": "Lancaster County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31111,
    "name": "Lincoln County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31113,
    "name": "Logan County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31115,
    "name": "Loup County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31117,
    "name": "McPherson County, NE",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 31119,
    "name": "Madison County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31121,
    "name": "Merrick County, NE",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 31123,
    "name": "Morrill County, NE",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 31125,
    "name": "Nance County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31127,
    "name": "Nemaha County, NE",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 31129,
    "name": "Nuckolls County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31131,
    "name": "Otoe County, NE",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 31133,
    "name": "Pawnee County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31135,
    "name": "Perkins County, NE",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": 31137,
    "name": "Phelps County, NE",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 31139,
    "name": "Pierce County, NE",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 31141,
    "name": "Platte County, NE",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 31143,
    "name": "Polk County, NE",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 31145,
    "name": "Red Willow County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31147,
    "name": "Richardson County, NE",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 31149,
    "name": "Rock County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 31151,
    "name": "Saline County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31153,
    "name": "Sarpy County, NE",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 31155,
    "name": "Saunders County, NE",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 31157,
    "name": "Scotts Bluff County, NE",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 31159,
    "name": "Seward County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31161,
    "name": "Sheridan County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31163,
    "name": "Sherman County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31165,
    "name": "Sioux County, NE",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 31167,
    "name": "Stanton County, NE",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 31169,
    "name": "Thayer County, NE",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 31171,
    "name": "Thomas County, NE",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 31173,
    "name": "Thurston County, NE",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 31175,
    "name": "Valley County, NE",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 31177,
    "name": "Washington County, NE",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 31179,
    "name": "Wayne County, NE",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 31181,
    "name": "Webster County, NE",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 31183,
    "name": "Wheeler County, NE",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 31185,
    "name": "York County, NE",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 32001,
    "name": "Churchill County, NV",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 32003,
    "name": "Clark County, NV",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 32005,
    "name": "Douglas County, NV",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 32007,
    "name": "Elko County, NV",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 32009,
    "name": "Esmeralda County, NV",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 32011,
    "name": "Eureka County, NV",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 32013,
    "name": "Humboldt County, NV",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 32015,
    "name": "Lander County, NV",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 32017,
    "name": "Lincoln County, NV",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 32019,
    "name": "Lyon County, NV",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 32021,
    "name": "Mineral County, NV",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 32023,
    "name": "Nye County, NV",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 32027,
    "name": "Pershing County, NV",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 32029,
    "name": "Storey County, NV",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 32031,
    "name": "Washoe County, NV",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 32033,
    "name": "White Pine County, NV",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 32510,
    "name": "Carson City, NV",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 33001,
    "name": "Belknap County, NH",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 33003,
    "name": "Carroll County, NH",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 33005,
    "name": "Cheshire County, NH",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 33007,
    "name": "Coos County, NH",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 33009,
    "name": "Grafton County, NH",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 33011,
    "name": "Hillsborough County, NH",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 33013,
    "name": "Merrimack County, NH",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 33015,
    "name": "Rockingham County, NH",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 33017,
    "name": "Strafford County, NH",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 33019,
    "name": "Sullivan County, NH",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 34001,
    "name": "Atlantic County, NJ",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 34003,
    "name": "Bergen County, NJ",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 34005,
    "name": "Burlington County, NJ",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 34007,
    "name": "Camden County, NJ",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 34009,
    "name": "Cape May County, NJ",
    "year": 2017,
    "unemployment_rate": 9.2
  },
  {
    "id": 34011,
    "name": "Cumberland County, NJ",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 34013,
    "name": "Essex County, NJ",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 34015,
    "name": "Gloucester County, NJ",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 34017,
    "name": "Hudson County, NJ",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 34019,
    "name": "Hunterdon County, NJ",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 34021,
    "name": "Mercer County, NJ",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 34023,
    "name": "Middlesex County, NJ",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 34025,
    "name": "Monmouth County, NJ",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 34027,
    "name": "Morris County, NJ",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 34029,
    "name": "Ocean County, NJ",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 34031,
    "name": "Passaic County, NJ",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 34033,
    "name": "Salem County, NJ",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 34035,
    "name": "Somerset County, NJ",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 34037,
    "name": "Sussex County, NJ",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 34039,
    "name": "Union County, NJ",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 34041,
    "name": "Warren County, NJ",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 35001,
    "name": "Bernalillo County, NM",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 35003,
    "name": "Catron County, NM",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 35005,
    "name": "Chaves County, NM",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 35006,
    "name": "Cibola County, NM",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 35007,
    "name": "Colfax County, NM",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 35009,
    "name": "Curry County, NM",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 35011,
    "name": "De Baca County, NM",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 35013,
    "name": "Dona Ana County, NM",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 35015,
    "name": "Eddy County, NM",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 35017,
    "name": "Grant County, NM",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 35019,
    "name": "Guadalupe County, NM",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 35021,
    "name": "Harding County, NM",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 35023,
    "name": "Hidalgo County, NM",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 35025,
    "name": "Lea County, NM",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 35027,
    "name": "Lincoln County, NM",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 35028,
    "name": "Los Alamos County, NM",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 35029,
    "name": "Luna County, NM",
    "year": 2017,
    "unemployment_rate": 13.4
  },
  {
    "id": 35031,
    "name": "McKinley County, NM",
    "year": 2017,
    "unemployment_rate": 8.2
  },
  {
    "id": 35033,
    "name": "Mora County, NM",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 35035,
    "name": "Otero County, NM",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 35037,
    "name": "Quay County, NM",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 35039,
    "name": "Rio Arriba County, NM",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 35041,
    "name": "Roosevelt County, NM",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 35043,
    "name": "Sandoval County, NM",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 35045,
    "name": "San Juan County, NM",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 35047,
    "name": "San Miguel County, NM",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 35049,
    "name": "Santa Fe County, NM",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 35051,
    "name": "Sierra County, NM",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 35053,
    "name": "Socorro County, NM",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 35055,
    "name": "Taos County, NM",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 35057,
    "name": "Torrance County, NM",
    "year": 2017,
    "unemployment_rate": 8.2
  },
  {
    "id": 35059,
    "name": "Union County, NM",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 35061,
    "name": "Valencia County, NM",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 36001,
    "name": "Albany County, NY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 36003,
    "name": "Allegany County, NY",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 36005,
    "name": "Bronx County, NY",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 36007,
    "name": "Broome County, NY",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 36009,
    "name": "Cattaraugus County, NY",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 36011,
    "name": "Cayuga County, NY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 36013,
    "name": "Chautauqua County, NY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 36015,
    "name": "Chemung County, NY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 36017,
    "name": "Chenango County, NY",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 36019,
    "name": "Clinton County, NY",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 36021,
    "name": "Columbia County, NY",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 36023,
    "name": "Cortland County, NY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 36025,
    "name": "Delaware County, NY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 36027,
    "name": "Dutchess County, NY",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 36029,
    "name": "Erie County, NY",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 36031,
    "name": "Essex County, NY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 36033,
    "name": "Franklin County, NY",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 36035,
    "name": "Fulton County, NY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 36037,
    "name": "Genesee County, NY",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 36039,
    "name": "Greene County, NY",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 36041,
    "name": "Hamilton County, NY",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 36043,
    "name": "Herkimer County, NY",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 36045,
    "name": "Jefferson County, NY",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 36047,
    "name": "Kings County, NY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 36049,
    "name": "Lewis County, NY",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 36051,
    "name": "Livingston County, NY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 36053,
    "name": "Madison County, NY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 36055,
    "name": "Monroe County, NY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 36057,
    "name": "Montgomery County, NY",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 36059,
    "name": "Nassau County, NY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 36061,
    "name": "New York County, NY",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 36063,
    "name": "Niagara County, NY",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 36065,
    "name": "Oneida County, NY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 36067,
    "name": "Onondaga County, NY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 36069,
    "name": "Ontario County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36071,
    "name": "Orange County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36073,
    "name": "Orleans County, NY",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 36075,
    "name": "Oswego County, NY",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 36077,
    "name": "Otsego County, NY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 36079,
    "name": "Putnam County, NY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 36081,
    "name": "Queens County, NY",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 36083,
    "name": "Rensselaer County, NY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 36085,
    "name": "Richmond County, NY",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 36087,
    "name": "Rockland County, NY",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 36089,
    "name": "St. Lawrence County, NY",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 36091,
    "name": "Saratoga County, NY",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 36093,
    "name": "Schenectady County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36095,
    "name": "Schoharie County, NY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 36097,
    "name": "Schuyler County, NY",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 36099,
    "name": "Seneca County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36101,
    "name": "Steuben County, NY",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 36103,
    "name": "Suffolk County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36105,
    "name": "Sullivan County, NY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 36107,
    "name": "Tioga County, NY",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 36109,
    "name": "Tompkins County, NY",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 36111,
    "name": "Ulster County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36113,
    "name": "Warren County, NY",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 36115,
    "name": "Washington County, NY",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 36117,
    "name": "Wayne County, NY",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 36119,
    "name": "Westchester County, NY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 36121,
    "name": "Wyoming County, NY",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 36123,
    "name": "Yates County, NY",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37001,
    "name": "Alamance County, NC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 37003,
    "name": "Alexander County, NC",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 37005,
    "name": "Alleghany County, NC",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 37007,
    "name": "Anson County, NC",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 37009,
    "name": "Ashe County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37011,
    "name": "Avery County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37013,
    "name": "Beaufort County, NC",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 37015,
    "name": "Bertie County, NC",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 37017,
    "name": "Bladen County, NC",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 37019,
    "name": "Brunswick County, NC",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 37021,
    "name": "Buncombe County, NC",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 37023,
    "name": "Burke County, NC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 37025,
    "name": "Cabarrus County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37027,
    "name": "Caldwell County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37029,
    "name": "Camden County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37031,
    "name": "Carteret County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37033,
    "name": "Caswell County, NC",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 37035,
    "name": "Catawba County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37037,
    "name": "Chatham County, NC",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 37039,
    "name": "Cherokee County, NC",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 37041,
    "name": "Chowan County, NC",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 37043,
    "name": "Clay County, NC",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 37045,
    "name": "Cleveland County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37047,
    "name": "Columbus County, NC",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 37049,
    "name": "Craven County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37051,
    "name": "Cumberland County, NC",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 37053,
    "name": "Currituck County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37055,
    "name": "Dare County, NC",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 37057,
    "name": "Davidson County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37059,
    "name": "Davie County, NC",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 37061,
    "name": "Duplin County, NC",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 37063,
    "name": "Durham County, NC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 37065,
    "name": "Edgecombe County, NC",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 37067,
    "name": "Forsyth County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37069,
    "name": "Franklin County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37071,
    "name": "Gaston County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37073,
    "name": "Gates County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37075,
    "name": "Graham County, NC",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 37077,
    "name": "Granville County, NC",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 37079,
    "name": "Greene County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37081,
    "name": "Guilford County, NC",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 37083,
    "name": "Halifax County, NC",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 37085,
    "name": "Harnett County, NC",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 37087,
    "name": "Haywood County, NC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 37089,
    "name": "Henderson County, NC",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 37091,
    "name": "Hertford County, NC",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 37093,
    "name": "Hoke County, NC",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 37095,
    "name": "Hyde County, NC",
    "year": 2017,
    "unemployment_rate": 8.4
  },
  {
    "id": 37097,
    "name": "Iredell County, NC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 37099,
    "name": "Jackson County, NC",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 37101,
    "name": "Johnston County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37103,
    "name": "Jones County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37105,
    "name": "Lee County, NC",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 37107,
    "name": "Lenoir County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37109,
    "name": "Lincoln County, NC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 37111,
    "name": "McDowell County, NC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 37113,
    "name": "Macon County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37115,
    "name": "Madison County, NC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 37117,
    "name": "Martin County, NC",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 37119,
    "name": "Mecklenburg County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37121,
    "name": "Mitchell County, NC",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 37123,
    "name": "Montgomery County, NC",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 37125,
    "name": "Moore County, NC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 37127,
    "name": "Nash County, NC",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 37129,
    "name": "New Hanover County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37131,
    "name": "Northampton County, NC",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 37133,
    "name": "Onslow County, NC",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 37135,
    "name": "Orange County, NC",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 37137,
    "name": "Pamlico County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37139,
    "name": "Pasquotank County, NC",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 37141,
    "name": "Pender County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37143,
    "name": "Perquimans County, NC",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 37145,
    "name": "Person County, NC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 37147,
    "name": "Pitt County, NC",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 37149,
    "name": "Polk County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37151,
    "name": "Randolph County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37153,
    "name": "Richmond County, NC",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 37155,
    "name": "Robeson County, NC",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 37157,
    "name": "Rockingham County, NC",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 37159,
    "name": "Rowan County, NC",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 37161,
    "name": "Rutherford County, NC",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 37163,
    "name": "Sampson County, NC",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 37165,
    "name": "Scotland County, NC",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 37167,
    "name": "Stanly County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37169,
    "name": "Stokes County, NC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 37171,
    "name": "Surry County, NC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 37173,
    "name": "Swain County, NC",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 37175,
    "name": "Transylvania County, NC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 37177,
    "name": "Tyrrell County, NC",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 37179,
    "name": "Union County, NC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 37181,
    "name": "Vance County, NC",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 37183,
    "name": "Wake County, NC",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 37185,
    "name": "Warren County, NC",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 37187,
    "name": "Washington County, NC",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 37189,
    "name": "Watauga County, NC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 37191,
    "name": "Wayne County, NC",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 37193,
    "name": "Wilkes County, NC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 37195,
    "name": "Wilson County, NC",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 37197,
    "name": "Yadkin County, NC",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 37199,
    "name": "Yancey County, NC",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 38001,
    "name": "Adams County, ND",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 38003,
    "name": "Barnes County, ND",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 38005,
    "name": "Benson County, ND",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 38007,
    "name": "Billings County, ND",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 38009,
    "name": "Bottineau County, ND",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 38011,
    "name": "Bowman County, ND",
    "year": 2017,
    "unemployment_rate": 1.8
  },
  {
    "id": 38013,
    "name": "Burke County, ND",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 38015,
    "name": "Burleigh County, ND",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 38017,
    "name": "Cass County, ND",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 38019,
    "name": "Cavalier County, ND",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 38021,
    "name": "Dickey County, ND",
    "year": 2017,
    "unemployment_rate": 1.8
  },
  {
    "id": 38023,
    "name": "Divide County, ND",
    "year": 2017,
    "unemployment_rate": 1.6
  },
  {
    "id": 38025,
    "name": "Dunn County, ND",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 38027,
    "name": "Eddy County, ND",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 38029,
    "name": "Emmons County, ND",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 38031,
    "name": "Foster County, ND",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 38033,
    "name": "Golden Valley County, ND",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 38035,
    "name": "Grand Forks County, ND",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 38037,
    "name": "Grant County, ND",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 38039,
    "name": "Griggs County, ND",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 38041,
    "name": "Hettinger County, ND",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 38043,
    "name": "Kidder County, ND",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 38045,
    "name": "LaMoure County, ND",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": 38047,
    "name": "Logan County, ND",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 38049,
    "name": "McHenry County, ND",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 38051,
    "name": "McIntosh County, ND",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 38053,
    "name": "McKenzie County, ND",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 38055,
    "name": "McLean County, ND",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 38057,
    "name": "Mercer County, ND",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 38059,
    "name": "Morton County, ND",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 38061,
    "name": "Mountrail County, ND",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 38063,
    "name": "Nelson County, ND",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 38065,
    "name": "Oliver County, ND",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 38067,
    "name": "Pembina County, ND",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 38069,
    "name": "Pierce County, ND",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 38071,
    "name": "Ramsey County, ND",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 38073,
    "name": "Ransom County, ND",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 38075,
    "name": "Renville County, ND",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 38077,
    "name": "Richland County, ND",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 38079,
    "name": "Rolette County, ND",
    "year": 2017,
    "unemployment_rate": 10.5
  },
  {
    "id": 38081,
    "name": "Sargent County, ND",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 38083,
    "name": "Sheridan County, ND",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 38085,
    "name": "Sioux County, ND",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 38087,
    "name": "Slope County, ND",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 38089,
    "name": "Stark County, ND",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 38091,
    "name": "Steele County, ND",
    "year": 2017,
    "unemployment_rate": 1.7
  },
  {
    "id": 38093,
    "name": "Stutsman County, ND",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 38095,
    "name": "Towner County, ND",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 38097,
    "name": "Traill County, ND",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 38099,
    "name": "Walsh County, ND",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 38101,
    "name": "Ward County, ND",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 38103,
    "name": "Wells County, ND",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 38105,
    "name": "Williams County, ND",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 39001,
    "name": "Adams County, OH",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 39003,
    "name": "Allen County, OH",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 39005,
    "name": "Ashland County, OH",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 39007,
    "name": "Ashtabula County, OH",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 39009,
    "name": "Athens County, OH",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 39011,
    "name": "Auglaize County, OH",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 39013,
    "name": "Belmont County, OH",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 39015,
    "name": "Brown County, OH",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 39017,
    "name": "Butler County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39019,
    "name": "Carroll County, OH",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 39021,
    "name": "Champaign County, OH",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 39023,
    "name": "Clark County, OH",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 39025,
    "name": "Clermont County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39027,
    "name": "Clinton County, OH",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 39029,
    "name": "Columbiana County, OH",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 39031,
    "name": "Coshocton County, OH",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 39033,
    "name": "Crawford County, OH",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 39035,
    "name": "Cuyahoga County, OH",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 39037,
    "name": "Darke County, OH",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 39039,
    "name": "Defiance County, OH",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 39041,
    "name": "Delaware County, OH",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 39043,
    "name": "Erie County, OH",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 39045,
    "name": "Fairfield County, OH",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 39047,
    "name": "Fayette County, OH",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 39049,
    "name": "Franklin County, OH",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 39051,
    "name": "Fulton County, OH",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 39053,
    "name": "Gallia County, OH",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 39055,
    "name": "Geauga County, OH",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 39057,
    "name": "Greene County, OH",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 39059,
    "name": "Guernsey County, OH",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 39061,
    "name": "Hamilton County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39063,
    "name": "Hancock County, OH",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 39065,
    "name": "Hardin County, OH",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 39067,
    "name": "Harrison County, OH",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 39069,
    "name": "Henry County, OH",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 39071,
    "name": "Highland County, OH",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 39073,
    "name": "Hocking County, OH",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 39075,
    "name": "Holmes County, OH",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 39077,
    "name": "Huron County, OH",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 39079,
    "name": "Jackson County, OH",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 39081,
    "name": "Jefferson County, OH",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 39083,
    "name": "Knox County, OH",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 39085,
    "name": "Lake County, OH",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 39087,
    "name": "Lawrence County, OH",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 39089,
    "name": "Licking County, OH",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 39091,
    "name": "Logan County, OH",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 39093,
    "name": "Lorain County, OH",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 39095,
    "name": "Lucas County, OH",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 39097,
    "name": "Madison County, OH",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 39099,
    "name": "Mahoning County, OH",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 39101,
    "name": "Marion County, OH",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 39103,
    "name": "Medina County, OH",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 39105,
    "name": "Meigs County, OH",
    "year": 2017,
    "unemployment_rate": 8.1
  },
  {
    "id": 39107,
    "name": "Mercer County, OH",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 39109,
    "name": "Miami County, OH",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 39111,
    "name": "Monroe County, OH",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 39113,
    "name": "Montgomery County, OH",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 39115,
    "name": "Morgan County, OH",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 39117,
    "name": "Morrow County, OH",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 39119,
    "name": "Muskingum County, OH",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 39121,
    "name": "Noble County, OH",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 39123,
    "name": "Ottawa County, OH",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 39125,
    "name": "Paulding County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39127,
    "name": "Perry County, OH",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 39129,
    "name": "Pickaway County, OH",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 39131,
    "name": "Pike County, OH",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 39133,
    "name": "Portage County, OH",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 39135,
    "name": "Preble County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39137,
    "name": "Putnam County, OH",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 39139,
    "name": "Richland County, OH",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 39141,
    "name": "Ross County, OH",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 39143,
    "name": "Sandusky County, OH",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 39145,
    "name": "Scioto County, OH",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 39147,
    "name": "Seneca County, OH",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 39149,
    "name": "Shelby County, OH",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 39151,
    "name": "Stark County, OH",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 39153,
    "name": "Summit County, OH",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 39155,
    "name": "Trumbull County, OH",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 39157,
    "name": "Tuscarawas County, OH",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 39159,
    "name": "Union County, OH",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 39161,
    "name": "Van Wert County, OH",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 39163,
    "name": "Vinton County, OH",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 39165,
    "name": "Warren County, OH",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 39167,
    "name": "Washington County, OH",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 39169,
    "name": "Wayne County, OH",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 39171,
    "name": "Williams County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39173,
    "name": "Wood County, OH",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 39175,
    "name": "Wyandot County, OH",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 40001,
    "name": "Adair County, OK",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 40003,
    "name": "Alfalfa County, OK",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 40005,
    "name": "Atoka County, OK",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 40007,
    "name": "Beaver County, OK",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 40009,
    "name": "Beckham County, OK",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 40011,
    "name": "Blaine County, OK",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 40013,
    "name": "Bryan County, OK",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 40015,
    "name": "Caddo County, OK",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 40017,
    "name": "Canadian County, OK",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 40019,
    "name": "Carter County, OK",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 40021,
    "name": "Cherokee County, OK",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 40023,
    "name": "Choctaw County, OK",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 40025,
    "name": "Cimarron County, OK",
    "year": 2017,
    "unemployment_rate": 2.3
  },
  {
    "id": 40027,
    "name": "Cleveland County, OK",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 40029,
    "name": "Coal County, OK",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 40031,
    "name": "Comanche County, OK",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 40033,
    "name": "Cotton County, OK",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 40035,
    "name": "Craig County, OK",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 40037,
    "name": "Creek County, OK",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 40039,
    "name": "Custer County, OK",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 40041,
    "name": "Delaware County, OK",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 40043,
    "name": "Dewey County, OK",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 40045,
    "name": "Ellis County, OK",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 40047,
    "name": "Garfield County, OK",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 40049,
    "name": "Garvin County, OK",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 40051,
    "name": "Grady County, OK",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 40053,
    "name": "Grant County, OK",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 40055,
    "name": "Greer County, OK",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 40057,
    "name": "Harmon County, OK",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 40059,
    "name": "Harper County, OK",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 40061,
    "name": "Haskell County, OK",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 40063,
    "name": "Hughes County, OK",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 40065,
    "name": "Jackson County, OK",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 40067,
    "name": "Jefferson County, OK",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 40069,
    "name": "Johnston County, OK",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 40071,
    "name": "Kay County, OK",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 40073,
    "name": "Kingfisher County, OK",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 40075,
    "name": "Kiowa County, OK",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 40077,
    "name": "Latimer County, OK",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 40079,
    "name": "Le Flore County, OK",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 40081,
    "name": "Lincoln County, OK",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 40083,
    "name": "Logan County, OK",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 40085,
    "name": "Love County, OK",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 40087,
    "name": "McClain County, OK",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 40089,
    "name": "McCurtain County, OK",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 40091,
    "name": "McIntosh County, OK",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 40093,
    "name": "Major County, OK",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 40095,
    "name": "Marshall County, OK",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 40097,
    "name": "Mayes County, OK",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 40099,
    "name": "Murray County, OK",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 40101,
    "name": "Muskogee County, OK",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 40103,
    "name": "Noble County, OK",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 40105,
    "name": "Nowata County, OK",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 40107,
    "name": "Okfuskee County, OK",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 40109,
    "name": "Oklahoma County, OK",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 40111,
    "name": "Okmulgee County, OK",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 40113,
    "name": "Osage County, OK",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 40115,
    "name": "Ottawa County, OK",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 40117,
    "name": "Pawnee County, OK",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 40119,
    "name": "Payne County, OK",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 40121,
    "name": "Pittsburg County, OK",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 40123,
    "name": "Pontotoc County, OK",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 40125,
    "name": "Pottawatomie County, OK",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 40127,
    "name": "Pushmataha County, OK",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 40129,
    "name": "Roger Mills County, OK",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 40131,
    "name": "Rogers County, OK",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 40133,
    "name": "Seminole County, OK",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 40135,
    "name": "Sequoyah County, OK",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 40137,
    "name": "Stephens County, OK",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 40139,
    "name": "Texas County, OK",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 40141,
    "name": "Tillman County, OK",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 40143,
    "name": "Tulsa County, OK",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 40145,
    "name": "Wagoner County, OK",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 40147,
    "name": "Washington County, OK",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 40149,
    "name": "Washita County, OK",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 40151,
    "name": "Woods County, OK",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 40153,
    "name": "Woodward County, OK",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 41001,
    "name": "Baker County, OR",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 41003,
    "name": "Benton County, OR",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 41005,
    "name": "Clackamas County, OR",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 41007,
    "name": "Clatsop County, OR",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 41009,
    "name": "Columbia County, OR",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 41011,
    "name": "Coos County, OR",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 41013,
    "name": "Crook County, OR",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 41015,
    "name": "Curry County, OR",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 41017,
    "name": "Deschutes County, OR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 41019,
    "name": "Douglas County, OR",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 41021,
    "name": "Gilliam County, OR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 41023,
    "name": "Grant County, OR",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 41025,
    "name": "Harney County, OR",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 41027,
    "name": "Hood River County, OR",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 41029,
    "name": "Jackson County, OR",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 41031,
    "name": "Jefferson County, OR",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 41033,
    "name": "Josephine County, OR",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 41035,
    "name": "Klamath County, OR",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 41037,
    "name": "Lake County, OR",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 41039,
    "name": "Lane County, OR",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 41041,
    "name": "Lincoln County, OR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 41043,
    "name": "Linn County, OR",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 41045,
    "name": "Malheur County, OR",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 41047,
    "name": "Marion County, OR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 41049,
    "name": "Morrow County, OR",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 41051,
    "name": "Multnomah County, OR",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 41053,
    "name": "Polk County, OR",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 41055,
    "name": "Sherman County, OR",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 41057,
    "name": "Tillamook County, OR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 41059,
    "name": "Umatilla County, OR",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 41061,
    "name": "Union County, OR",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 41063,
    "name": "Wallowa County, OR",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 41065,
    "name": "Wasco County, OR",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 41067,
    "name": "Washington County, OR",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 41069,
    "name": "Wheeler County, OR",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 41071,
    "name": "Yamhill County, OR",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 42001,
    "name": "Adams County, PA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 42003,
    "name": "Allegheny County, PA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 42005,
    "name": "Armstrong County, PA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 42007,
    "name": "Beaver County, PA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 42009,
    "name": "Bedford County, PA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 42011,
    "name": "Berks County, PA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 42013,
    "name": "Blair County, PA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 42015,
    "name": "Bradford County, PA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 42017,
    "name": "Bucks County, PA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 42019,
    "name": "Butler County, PA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 42021,
    "name": "Cambria County, PA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 42023,
    "name": "Cameron County, PA",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 42025,
    "name": "Carbon County, PA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 42027,
    "name": "Centre County, PA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 42029,
    "name": "Chester County, PA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 42031,
    "name": "Clarion County, PA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 42033,
    "name": "Clearfield County, PA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 42035,
    "name": "Clinton County, PA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 42037,
    "name": "Columbia County, PA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 42039,
    "name": "Crawford County, PA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 42041,
    "name": "Cumberland County, PA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 42043,
    "name": "Dauphin County, PA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 42045,
    "name": "Delaware County, PA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 42047,
    "name": "Elk County, PA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 42049,
    "name": "Erie County, PA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 42051,
    "name": "Fayette County, PA",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 42053,
    "name": "Forest County, PA",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 42055,
    "name": "Franklin County, PA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 42057,
    "name": "Fulton County, PA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 42059,
    "name": "Greene County, PA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 42061,
    "name": "Huntingdon County, PA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 42063,
    "name": "Indiana County, PA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 42065,
    "name": "Jefferson County, PA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 42067,
    "name": "Juniata County, PA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 42069,
    "name": "Lackawanna County, PA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 42071,
    "name": "Lancaster County, PA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 42073,
    "name": "Lawrence County, PA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 42075,
    "name": "Lebanon County, PA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 42077,
    "name": "Lehigh County, PA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 42079,
    "name": "Luzerne County, PA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 42081,
    "name": "Lycoming County, PA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 42083,
    "name": "McKean County, PA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 42085,
    "name": "Mercer County, PA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 42087,
    "name": "Mifflin County, PA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 42089,
    "name": "Monroe County, PA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 42091,
    "name": "Montgomery County, PA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 42093,
    "name": "Montour County, PA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 42095,
    "name": "Northampton County, PA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 42097,
    "name": "Northumberland County, PA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 42099,
    "name": "Perry County, PA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 42101,
    "name": "Philadelphia County/city, PA",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 42103,
    "name": "Pike County, PA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 42105,
    "name": "Potter County, PA",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 42107,
    "name": "Schuylkill County, PA",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 42109,
    "name": "Snyder County, PA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 42111,
    "name": "Somerset County, PA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 42113,
    "name": "Sullivan County, PA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 42115,
    "name": "Susquehanna County, PA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 42117,
    "name": "Tioga County, PA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 42119,
    "name": "Union County, PA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 42121,
    "name": "Venango County, PA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 42123,
    "name": "Warren County, PA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 42125,
    "name": "Washington County, PA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 42127,
    "name": "Wayne County, PA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 42129,
    "name": "Westmoreland County, PA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 42131,
    "name": "Wyoming County, PA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 42133,
    "name": "York County, PA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 44001,
    "name": "Bristol County, RI",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 44003,
    "name": "Kent County, RI",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 44005,
    "name": "Newport County, RI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 44007,
    "name": "Providence County, RI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 44009,
    "name": "Washington County, RI",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 45001,
    "name": "Abbeville County, SC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 45003,
    "name": "Aiken County, SC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 45005,
    "name": "Allendale County, SC",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 45007,
    "name": "Anderson County, SC",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 45009,
    "name": "Bamberg County, SC",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 45011,
    "name": "Barnwell County, SC",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 45013,
    "name": "Beaufort County, SC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 45015,
    "name": "Berkeley County, SC",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 45017,
    "name": "Calhoun County, SC",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 45019,
    "name": "Charleston County, SC",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 45021,
    "name": "Cherokee County, SC",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 45023,
    "name": "Chester County, SC",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 45025,
    "name": "Chesterfield County, SC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 45027,
    "name": "Clarendon County, SC",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 45029,
    "name": "Colleton County, SC",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 45031,
    "name": "Darlington County, SC",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 45033,
    "name": "Dillon County, SC",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 45035,
    "name": "Dorchester County, SC",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 45037,
    "name": "Edgefield County, SC",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 45039,
    "name": "Fairfield County, SC",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 45041,
    "name": "Florence County, SC",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 45043,
    "name": "Georgetown County, SC",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 45045,
    "name": "Greenville County, SC",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 45047,
    "name": "Greenwood County, SC",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 45049,
    "name": "Hampton County, SC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 45051,
    "name": "Horry County, SC",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 45053,
    "name": "Jasper County, SC",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 45055,
    "name": "Kershaw County, SC",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 45057,
    "name": "Lancaster County, SC",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 45059,
    "name": "Laurens County, SC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 45061,
    "name": "Lee County, SC",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 45063,
    "name": "Lexington County, SC",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 45065,
    "name": "McCormick County, SC",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 45067,
    "name": "Marion County, SC",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 45069,
    "name": "Marlboro County, SC",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 45071,
    "name": "Newberry County, SC",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 45073,
    "name": "Oconee County, SC",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 45075,
    "name": "Orangeburg County, SC",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 45077,
    "name": "Pickens County, SC",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 45079,
    "name": "Richland County, SC",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 45081,
    "name": "Saluda County, SC",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 45083,
    "name": "Spartanburg County, SC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 45085,
    "name": "Sumter County, SC",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 45087,
    "name": "Union County, SC",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 45089,
    "name": "Williamsburg County, SC",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 45091,
    "name": "York County, SC",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 46003,
    "name": "Aurora County, SD",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 46005,
    "name": "Beadle County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46007,
    "name": "Bennett County, SD",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 46009,
    "name": "Bon Homme County, SD",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 46011,
    "name": "Brookings County, SD",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 46013,
    "name": "Brown County, SD",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 46015,
    "name": "Brule County, SD",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 46017,
    "name": "Buffalo County, SD",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 46019,
    "name": "Butte County, SD",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 46021,
    "name": "Campbell County, SD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 46023,
    "name": "Charles Mix County, SD",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 46025,
    "name": "Clark County, SD",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 46027,
    "name": "Clay County, SD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 46029,
    "name": "Codington County, SD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 46031,
    "name": "Corson County, SD",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 46033,
    "name": "Custer County, SD",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 46035,
    "name": "Davison County, SD",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 46037,
    "name": "Day County, SD",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 46039,
    "name": "Deuel County, SD",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 46041,
    "name": "Dewey County, SD",
    "year": 2017,
    "unemployment_rate": 9.8
  },
  {
    "id": 46043,
    "name": "Douglas County, SD",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 46045,
    "name": "Edmunds County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46047,
    "name": "Fall River County, SD",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 46049,
    "name": "Faulk County, SD",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 46051,
    "name": "Grant County, SD",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 46053,
    "name": "Gregory County, SD",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 46055,
    "name": "Haakon County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46057,
    "name": "Hamlin County, SD",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 46059,
    "name": "Hand County, SD",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 46061,
    "name": "Hanson County, SD",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 46063,
    "name": "Harding County, SD",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 46065,
    "name": "Hughes County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46067,
    "name": "Hutchinson County, SD",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 46069,
    "name": "Hyde County, SD",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 46071,
    "name": "Jackson County, SD",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 46073,
    "name": "Jerauld County, SD",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 46075,
    "name": "Jones County, SD",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 46077,
    "name": "Kingsbury County, SD",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 46079,
    "name": "Lake County, SD",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 46081,
    "name": "Lawrence County, SD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 46083,
    "name": "Lincoln County, SD",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 46085,
    "name": "Lyman County, SD",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 46087,
    "name": "McCook County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46089,
    "name": "McPherson County, SD",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 46091,
    "name": "Marshall County, SD",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 46093,
    "name": "Meade County, SD",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 46095,
    "name": "Mellette County, SD",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 46097,
    "name": "Miner County, SD",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 46099,
    "name": "Minnehaha County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46101,
    "name": "Moody County, SD",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 46102,
    "name": "Oglala Lakota County, SD",
    "year": 2017,
    "unemployment_rate": 11.2
  },
  {
    "id": 46103,
    "name": "Pennington County, SD",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 46105,
    "name": "Perkins County, SD",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 46107,
    "name": "Potter County, SD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 46109,
    "name": "Roberts County, SD",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 46111,
    "name": "Sanborn County, SD",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 46115,
    "name": "Spink County, SD",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 46117,
    "name": "Stanley County, SD",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 46119,
    "name": "Sully County, SD",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 46121,
    "name": "Todd County, SD",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 46123,
    "name": "Tripp County, SD",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 46125,
    "name": "Turner County, SD",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 46127,
    "name": "Union County, SD",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 46129,
    "name": "Walworth County, SD",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 46135,
    "name": "Yankton County, SD",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 46137,
    "name": "Ziebach County, SD",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 47001,
    "name": "Anderson County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47003,
    "name": "Bedford County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47005,
    "name": "Benton County, TN",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 47007,
    "name": "Bledsoe County, TN",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 47009,
    "name": "Blount County, TN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 47011,
    "name": "Bradley County, TN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 47013,
    "name": "Campbell County, TN",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 47015,
    "name": "Cannon County, TN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 47017,
    "name": "Carroll County, TN",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 47019,
    "name": "Carter County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47021,
    "name": "Cheatham County, TN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 47023,
    "name": "Chester County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47025,
    "name": "Claiborne County, TN",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 47027,
    "name": "Clay County, TN",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 47029,
    "name": "Cocke County, TN",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 47031,
    "name": "Coffee County, TN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 47033,
    "name": "Crockett County, TN",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 47035,
    "name": "Cumberland County, TN",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 47037,
    "name": "Davidson County, TN",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 47039,
    "name": "Decatur County, TN",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 47041,
    "name": "DeKalb County, TN",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 47043,
    "name": "Dickson County, TN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 47045,
    "name": "Dyer County, TN",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 47047,
    "name": "Fayette County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47049,
    "name": "Fentress County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47051,
    "name": "Franklin County, TN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 47053,
    "name": "Gibson County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47055,
    "name": "Giles County, TN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 47057,
    "name": "Grainger County, TN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 47059,
    "name": "Greene County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47061,
    "name": "Grundy County, TN",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 47063,
    "name": "Hamblen County, TN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 47065,
    "name": "Hamilton County, TN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 47067,
    "name": "Hancock County, TN",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 47069,
    "name": "Hardeman County, TN",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 47071,
    "name": "Hardin County, TN",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 47073,
    "name": "Hawkins County, TN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 47075,
    "name": "Haywood County, TN",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 47077,
    "name": "Henderson County, TN",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 47079,
    "name": "Henry County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47081,
    "name": "Hickman County, TN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 47083,
    "name": "Houston County, TN",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 47085,
    "name": "Humphreys County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47087,
    "name": "Jackson County, TN",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 47089,
    "name": "Jefferson County, TN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 47091,
    "name": "Johnson County, TN",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 47093,
    "name": "Knox County, TN",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 47095,
    "name": "Lake County, TN",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 47097,
    "name": "Lauderdale County, TN",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 47099,
    "name": "Lawrence County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47101,
    "name": "Lewis County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47103,
    "name": "Lincoln County, TN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 47105,
    "name": "Loudon County, TN",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 47107,
    "name": "McMinn County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47109,
    "name": "McNairy County, TN",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 47111,
    "name": "Macon County, TN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 47113,
    "name": "Madison County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47115,
    "name": "Marion County, TN",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 47117,
    "name": "Marshall County, TN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 47119,
    "name": "Maury County, TN",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 47121,
    "name": "Meigs County, TN",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 47123,
    "name": "Monroe County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47125,
    "name": "Montgomery County, TN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 47127,
    "name": "Moore County, TN",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 47129,
    "name": "Morgan County, TN",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 47131,
    "name": "Obion County, TN",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 47133,
    "name": "Overton County, TN",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 47135,
    "name": "Perry County, TN",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 47137,
    "name": "Pickett County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47139,
    "name": "Polk County, TN",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 47141,
    "name": "Putnam County, TN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 47143,
    "name": "Rhea County, TN",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 47145,
    "name": "Roane County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47147,
    "name": "Robertson County, TN",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 47149,
    "name": "Rutherford County, TN",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 47151,
    "name": "Scott County, TN",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 47153,
    "name": "Sequatchie County, TN",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 47155,
    "name": "Sevier County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47157,
    "name": "Shelby County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47159,
    "name": "Smith County, TN",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 47161,
    "name": "Stewart County, TN",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 47163,
    "name": "Sullivan County, TN",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 47165,
    "name": "Sumner County, TN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 47167,
    "name": "Tipton County, TN",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 47169,
    "name": "Trousdale County, TN",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 47171,
    "name": "Unicoi County, TN",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 47173,
    "name": "Union County, TN",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 47175,
    "name": "Van Buren County, TN",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 47177,
    "name": "Warren County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47179,
    "name": "Washington County, TN",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 47181,
    "name": "Wayne County, TN",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 47183,
    "name": "Weakley County, TN",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 47185,
    "name": "White County, TN",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 47187,
    "name": "Williamson County, TN",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 47189,
    "name": "Wilson County, TN",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 48001,
    "name": "Anderson County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48003,
    "name": "Andrews County, TX",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 48005,
    "name": "Angelina County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48007,
    "name": "Aransas County, TX",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 48009,
    "name": "Archer County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48011,
    "name": "Armstrong County, TX",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 48013,
    "name": "Atascosa County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48015,
    "name": "Austin County, TX",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 48017,
    "name": "Bailey County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48019,
    "name": "Bandera County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48021,
    "name": "Bastrop County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48023,
    "name": "Baylor County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48025,
    "name": "Bee County, TX",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 48027,
    "name": "Bell County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48029,
    "name": "Bexar County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48031,
    "name": "Blanco County, TX",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 48033,
    "name": "Borden County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48035,
    "name": "Bosque County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48037,
    "name": "Bowie County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48039,
    "name": "Brazoria County, TX",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 48041,
    "name": "Brazos County, TX",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 48043,
    "name": "Brewster County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48045,
    "name": "Briscoe County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48047,
    "name": "Brooks County, TX",
    "year": 2017,
    "unemployment_rate": 8.3
  },
  {
    "id": 48049,
    "name": "Brown County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48051,
    "name": "Burleson County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48053,
    "name": "Burnet County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48055,
    "name": "Caldwell County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48057,
    "name": "Calhoun County, TX",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 48059,
    "name": "Callahan County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48061,
    "name": "Cameron County, TX",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 48063,
    "name": "Camp County, TX",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 48065,
    "name": "Carson County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48067,
    "name": "Cass County, TX",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 48069,
    "name": "Castro County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48071,
    "name": "Chambers County, TX",
    "year": 2017,
    "unemployment_rate": 6.5
  },
  {
    "id": 48073,
    "name": "Cherokee County, TX",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 48075,
    "name": "Childress County, TX",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 48077,
    "name": "Clay County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48079,
    "name": "Cochran County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48081,
    "name": "Coke County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48083,
    "name": "Coleman County, TX",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 48085,
    "name": "Collin County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48087,
    "name": "Collingsworth County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48089,
    "name": "Colorado County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48091,
    "name": "Comal County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48093,
    "name": "Comanche County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48095,
    "name": "Concho County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48097,
    "name": "Cooke County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48099,
    "name": "Coryell County, TX",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 48101,
    "name": "Cottle County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48103,
    "name": "Crane County, TX",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 48105,
    "name": "Crockett County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48107,
    "name": "Crosby County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48109,
    "name": "Culberson County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48111,
    "name": "Dallam County, TX",
    "year": 2017,
    "unemployment_rate": 2.1
  },
  {
    "id": 48113,
    "name": "Dallas County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48115,
    "name": "Dawson County, TX",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 48117,
    "name": "Deaf Smith County, TX",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 48119,
    "name": "Delta County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48121,
    "name": "Denton County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48123,
    "name": "DeWitt County, TX",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 48125,
    "name": "Dickens County, TX",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 48127,
    "name": "Dimmit County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48129,
    "name": "Donley County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48131,
    "name": "Duval County, TX",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 48133,
    "name": "Eastland County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48135,
    "name": "Ector County, TX",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 48137,
    "name": "Edwards County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48139,
    "name": "Ellis County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48141,
    "name": "El Paso County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48143,
    "name": "Erath County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48145,
    "name": "Falls County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48147,
    "name": "Fannin County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48149,
    "name": "Fayette County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48151,
    "name": "Fisher County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48153,
    "name": "Floyd County, TX",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 48155,
    "name": "Foard County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48157,
    "name": "Fort Bend County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48159,
    "name": "Franklin County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48161,
    "name": "Freestone County, TX",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 48163,
    "name": "Frio County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48165,
    "name": "Gaines County, TX",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 48167,
    "name": "Galveston County, TX",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 48169,
    "name": "Garza County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48171,
    "name": "Gillespie County, TX",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 48173,
    "name": "Glasscock County, TX",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 48175,
    "name": "Goliad County, TX",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 48177,
    "name": "Gonzales County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48179,
    "name": "Gray County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48181,
    "name": "Grayson County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48183,
    "name": "Gregg County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48185,
    "name": "Grimes County, TX",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 48187,
    "name": "Guadalupe County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48189,
    "name": "Hale County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48191,
    "name": "Hall County, TX",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 48193,
    "name": "Hamilton County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48195,
    "name": "Hansford County, TX",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 48197,
    "name": "Hardeman County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48199,
    "name": "Hardin County, TX",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 48201,
    "name": "Harris County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48203,
    "name": "Harrison County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48205,
    "name": "Hartley County, TX",
    "year": 2017,
    "unemployment_rate": 2
  },
  {
    "id": 48207,
    "name": "Haskell County, TX",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 48209,
    "name": "Hays County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48211,
    "name": "Hemphill County, TX",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 48213,
    "name": "Henderson County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48215,
    "name": "Hidalgo County, TX",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 48217,
    "name": "Hill County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48219,
    "name": "Hockley County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48221,
    "name": "Hood County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48223,
    "name": "Hopkins County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48225,
    "name": "Houston County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48227,
    "name": "Howard County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48229,
    "name": "Hudspeth County, TX",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 48231,
    "name": "Hunt County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48233,
    "name": "Hutchinson County, TX",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 48235,
    "name": "Irion County, TX",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 48237,
    "name": "Jack County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48239,
    "name": "Jackson County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48241,
    "name": "Jasper County, TX",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 48243,
    "name": "Jeff Davis County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48245,
    "name": "Jefferson County, TX",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 48247,
    "name": "Jim Hogg County, TX",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 48249,
    "name": "Jim Wells County, TX",
    "year": 2017,
    "unemployment_rate": 7.6
  },
  {
    "id": 48251,
    "name": "Johnson County, TX",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 48253,
    "name": "Jones County, TX",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 48255,
    "name": "Karnes County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48257,
    "name": "Kaufman County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48259,
    "name": "Kendall County, TX",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 48261,
    "name": "Kenedy County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48263,
    "name": "Kent County, TX",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 48265,
    "name": "Kerr County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48267,
    "name": "Kimble County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48269,
    "name": "King County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48271,
    "name": "Kinney County, TX",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 48273,
    "name": "Kleberg County, TX",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 48275,
    "name": "Knox County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48277,
    "name": "Lamar County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48279,
    "name": "Lamb County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48281,
    "name": "Lampasas County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48283,
    "name": "La Salle County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48285,
    "name": "Lavaca County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48287,
    "name": "Lee County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48289,
    "name": "Leon County, TX",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 48291,
    "name": "Liberty County, TX",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 48293,
    "name": "Limestone County, TX",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 48295,
    "name": "Lipscomb County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48297,
    "name": "Live Oak County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48299,
    "name": "Llano County, TX",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 48301,
    "name": "Loving County, TX",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 48303,
    "name": "Lubbock County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48305,
    "name": "Lynn County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48307,
    "name": "McCulloch County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48309,
    "name": "McLennan County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48311,
    "name": "McMullen County, TX",
    "year": 2017,
    "unemployment_rate": 1.9
  },
  {
    "id": 48313,
    "name": "Madison County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48315,
    "name": "Marion County, TX",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 48317,
    "name": "Martin County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48319,
    "name": "Mason County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48321,
    "name": "Matagorda County, TX",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 48323,
    "name": "Maverick County, TX",
    "year": 2017,
    "unemployment_rate": 9.3
  },
  {
    "id": 48325,
    "name": "Medina County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48327,
    "name": "Menard County, TX",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 48329,
    "name": "Midland County, TX",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 48331,
    "name": "Milam County, TX",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 48333,
    "name": "Mills County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48335,
    "name": "Mitchell County, TX",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 48337,
    "name": "Montague County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48339,
    "name": "Montgomery County, TX",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 48341,
    "name": "Moore County, TX",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 48343,
    "name": "Morris County, TX",
    "year": 2017,
    "unemployment_rate": 8.6
  },
  {
    "id": 48345,
    "name": "Motley County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48347,
    "name": "Nacogdoches County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48349,
    "name": "Navarro County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48351,
    "name": "Newton County, TX",
    "year": 2017,
    "unemployment_rate": 8
  },
  {
    "id": 48353,
    "name": "Nolan County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48355,
    "name": "Nueces County, TX",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 48357,
    "name": "Ochiltree County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48359,
    "name": "Oldham County, TX",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 48361,
    "name": "Orange County, TX",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 48363,
    "name": "Palo Pinto County, TX",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 48365,
    "name": "Panola County, TX",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 48367,
    "name": "Parker County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48369,
    "name": "Parmer County, TX",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 48371,
    "name": "Pecos County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48373,
    "name": "Polk County, TX",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 48375,
    "name": "Potter County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48377,
    "name": "Presidio County, TX",
    "year": 2017,
    "unemployment_rate": 9.4
  },
  {
    "id": 48379,
    "name": "Rains County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48381,
    "name": "Randall County, TX",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 48383,
    "name": "Reagan County, TX",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 48385,
    "name": "Real County, TX",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 48387,
    "name": "Red River County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48389,
    "name": "Reeves County, TX",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 48391,
    "name": "Refugio County, TX",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 48393,
    "name": "Roberts County, TX",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 48395,
    "name": "Robertson County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48397,
    "name": "Rockwall County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48399,
    "name": "Runnels County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48401,
    "name": "Rusk County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48403,
    "name": "Sabine County, TX",
    "year": 2017,
    "unemployment_rate": 8.6
  },
  {
    "id": 48405,
    "name": "San Augustine County, TX",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 48407,
    "name": "San Jacinto County, TX",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 48409,
    "name": "San Patricio County, TX",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 48411,
    "name": "San Saba County, TX",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 48413,
    "name": "Schleicher County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48415,
    "name": "Scurry County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48417,
    "name": "Shackelford County, TX",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 48419,
    "name": "Shelby County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48421,
    "name": "Sherman County, TX",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 48423,
    "name": "Smith County, TX",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 48425,
    "name": "Somervell County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48427,
    "name": "Starr County, TX",
    "year": 2017,
    "unemployment_rate": 11.8
  },
  {
    "id": 48429,
    "name": "Stephens County, TX",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 48431,
    "name": "Sterling County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48433,
    "name": "Stonewall County, TX",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 48435,
    "name": "Sutton County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48437,
    "name": "Swisher County, TX",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 48439,
    "name": "Tarrant County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48441,
    "name": "Taylor County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48443,
    "name": "Terrell County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48445,
    "name": "Terry County, TX",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 48447,
    "name": "Throckmorton County, TX",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 48449,
    "name": "Titus County, TX",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 48451,
    "name": "Tom Green County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48453,
    "name": "Travis County, TX",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 48455,
    "name": "Trinity County, TX",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 48457,
    "name": "Tyler County, TX",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 48459,
    "name": "Upshur County, TX",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 48461,
    "name": "Upton County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48463,
    "name": "Uvalde County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48465,
    "name": "Val Verde County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48467,
    "name": "Van Zandt County, TX",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 48469,
    "name": "Victoria County, TX",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 48471,
    "name": "Walker County, TX",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 48473,
    "name": "Waller County, TX",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 48475,
    "name": "Ward County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48477,
    "name": "Washington County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48479,
    "name": "Webb County, TX",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 48481,
    "name": "Wharton County, TX",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 48483,
    "name": "Wheeler County, TX",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 48485,
    "name": "Wichita County, TX",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 48487,
    "name": "Wilbarger County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48489,
    "name": "Willacy County, TX",
    "year": 2017,
    "unemployment_rate": 11
  },
  {
    "id": 48491,
    "name": "Williamson County, TX",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 48493,
    "name": "Wilson County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48495,
    "name": "Winkler County, TX",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 48497,
    "name": "Wise County, TX",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 48499,
    "name": "Wood County, TX",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 48501,
    "name": "Yoakum County, TX",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 48503,
    "name": "Young County, TX",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 48505,
    "name": "Zapata County, TX",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 48507,
    "name": "Zavala County, TX",
    "year": 2017,
    "unemployment_rate": 11.2
  },
  {
    "id": 49001,
    "name": "Beaver County, UT",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 49003,
    "name": "Box Elder County, UT",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 49005,
    "name": "Cache County, UT",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 49007,
    "name": "Carbon County, UT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 49009,
    "name": "Daggett County, UT",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 49011,
    "name": "Davis County, UT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 49013,
    "name": "Duchesne County, UT",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 49015,
    "name": "Emery County, UT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 49017,
    "name": "Garfield County, UT",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 49019,
    "name": "Grand County, UT",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 49021,
    "name": "Iron County, UT",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 49023,
    "name": "Juab County, UT",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 49025,
    "name": "Kane County, UT",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 49027,
    "name": "Millard County, UT",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 49029,
    "name": "Morgan County, UT",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 49031,
    "name": "Piute County, UT",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 49033,
    "name": "Rich County, UT",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 49035,
    "name": "Salt Lake County, UT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 49037,
    "name": "San Juan County, UT",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 49039,
    "name": "Sanpete County, UT",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 49041,
    "name": "Sevier County, UT",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 49043,
    "name": "Summit County, UT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 49045,
    "name": "Tooele County, UT",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 49047,
    "name": "Uintah County, UT",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 49049,
    "name": "Utah County, UT",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 49051,
    "name": "Wasatch County, UT",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 49053,
    "name": "Washington County, UT",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 49055,
    "name": "Wayne County, UT",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 49057,
    "name": "Weber County, UT",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 50001,
    "name": "Addison County, VT",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 50003,
    "name": "Bennington County, VT",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 50005,
    "name": "Caledonia County, VT",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 50007,
    "name": "Chittenden County, VT",
    "year": 2017,
    "unemployment_rate": 2.2
  },
  {
    "id": 50009,
    "name": "Essex County, VT",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 50011,
    "name": "Franklin County, VT",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 50013,
    "name": "Grand Isle County, VT",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 50015,
    "name": "Lamoille County, VT",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 50017,
    "name": "Orange County, VT",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 50019,
    "name": "Orleans County, VT",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 50021,
    "name": "Rutland County, VT",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 50023,
    "name": "Washington County, VT",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 50025,
    "name": "Windham County, VT",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 50027,
    "name": "Windsor County, VT",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 51001,
    "name": "Accomack County, VA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 51003,
    "name": "Albemarle County, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51005,
    "name": "Alleghany County, VA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 51007,
    "name": "Amelia County, VA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 51009,
    "name": "Amherst County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51011,
    "name": "Appomattox County, VA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 51013,
    "name": "Arlington County, VA",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 51015,
    "name": "Augusta County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51017,
    "name": "Bath County, VA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 51019,
    "name": "Bedford County, VA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 51021,
    "name": "Bland County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51023,
    "name": "Botetourt County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51025,
    "name": "Brunswick County, VA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 51027,
    "name": "Buchanan County, VA",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 51029,
    "name": "Buckingham County, VA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 51031,
    "name": "Campbell County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51033,
    "name": "Caroline County, VA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 51035,
    "name": "Carroll County, VA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 51036,
    "name": "Charles City County, VA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 51037,
    "name": "Charlotte County, VA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 51041,
    "name": "Chesterfield County, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 51043,
    "name": "Clarke County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51045,
    "name": "Craig County, VA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 51047,
    "name": "Culpeper County, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 51049,
    "name": "Cumberland County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51051,
    "name": "Dickenson County, VA",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 51053,
    "name": "Dinwiddie County, VA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 51057,
    "name": "Essex County, VA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 51059,
    "name": "Fairfax County, VA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 51061,
    "name": "Fauquier County, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51063,
    "name": "Floyd County, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51065,
    "name": "Fluvanna County, VA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 51067,
    "name": "Franklin County, VA",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 51069,
    "name": "Frederick County, VA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 51071,
    "name": "Giles County, VA",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 51073,
    "name": "Gloucester County, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51075,
    "name": "Goochland County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51077,
    "name": "Grayson County, VA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 51079,
    "name": "Greene County, VA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 51081,
    "name": "Greensville County, VA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 51083,
    "name": "Halifax County, VA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 51085,
    "name": "Hanover County, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51087,
    "name": "Henrico County, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51089,
    "name": "Henry County, VA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 51091,
    "name": "Highland County, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51093,
    "name": "Isle of Wight County, VA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 51095,
    "name": "James City County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51097,
    "name": "King and Queen County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51099,
    "name": "King George County, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51101,
    "name": "King William County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51103,
    "name": "Lancaster County, VA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 51105,
    "name": "Lee County, VA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 51107,
    "name": "Loudoun County, VA",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 51109,
    "name": "Louisa County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51111,
    "name": "Lunenburg County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51113,
    "name": "Madison County, VA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 51115,
    "name": "Mathews County, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51117,
    "name": "Mecklenburg County, VA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 51119,
    "name": "Middlesex County, VA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 51121,
    "name": "Montgomery County, VA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 51125,
    "name": "Nelson County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51127,
    "name": "New Kent County, VA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 51131,
    "name": "Northampton County, VA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 51133,
    "name": "Northumberland County, VA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 51135,
    "name": "Nottoway County, VA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 51137,
    "name": "Orange County, VA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 51139,
    "name": "Page County, VA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 51141,
    "name": "Patrick County, VA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 51143,
    "name": "Pittsylvania County, VA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 51145,
    "name": "Powhatan County, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51147,
    "name": "Prince Edward County, VA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 51149,
    "name": "Prince George County, VA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 51153,
    "name": "Prince William County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51155,
    "name": "Pulaski County, VA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 51157,
    "name": "Rappahannock County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51159,
    "name": "Richmond County, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 51161,
    "name": "Roanoke County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51163,
    "name": "Rockbridge County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51165,
    "name": "Rockingham County, VA",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 51167,
    "name": "Russell County, VA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 51169,
    "name": "Scott County, VA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 51171,
    "name": "Shenandoah County, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51173,
    "name": "Smyth County, VA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 51175,
    "name": "Southampton County, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 51177,
    "name": "Spotsylvania County, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51179,
    "name": "Stafford County, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 51181,
    "name": "Surry County, VA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 51183,
    "name": "Sussex County, VA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 51185,
    "name": "Tazewell County, VA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 51187,
    "name": "Warren County, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51191,
    "name": "Washington County, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51193,
    "name": "Westmoreland County, VA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 51195,
    "name": "Wise County, VA",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 51197,
    "name": "Wythe County, VA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 51199,
    "name": "York County, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51510,
    "name": "Alexandria city, VA",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 51520,
    "name": "Bristol city, VA",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 51530,
    "name": "Buena Vista city, VA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 51540,
    "name": "Charlottesville city, VA",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 51550,
    "name": "Chesapeake city, VA",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 51570,
    "name": "Colonial Heights city, VA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 51580,
    "name": "Covington city, VA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 51590,
    "name": "Danville city, VA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 51595,
    "name": "Emporia city, VA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 51600,
    "name": "Fairfax city, VA",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 51610,
    "name": "Falls Church city, VA",
    "year": 2017,
    "unemployment_rate": 2.6
  },
  {
    "id": 51620,
    "name": "Franklin city, VA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 51630,
    "name": "Fredericksburg city, VA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 51640,
    "name": "Galax city, VA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 51650,
    "name": "Hampton city, VA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 51660,
    "name": "Harrisonburg city, VA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 51670,
    "name": "Hopewell city, VA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 51678,
    "name": "Lexington city, VA",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 51680,
    "name": "Lynchburg city, VA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 51683,
    "name": "Manassas city, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51685,
    "name": "Manassas Park city, VA",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 51690,
    "name": "Martinsville city, VA",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 51700,
    "name": "Newport News city, VA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 51710,
    "name": "Norfolk city, VA",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 51720,
    "name": "Norton city, VA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 51730,
    "name": "Petersburg city, VA",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 51735,
    "name": "Poquoson city, VA",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 51740,
    "name": "Portsmouth city, VA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 51750,
    "name": "Radford city, VA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 51760,
    "name": "Richmond city, VA",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 51770,
    "name": "Roanoke city, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51775,
    "name": "Salem city, VA",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 51790,
    "name": "Staunton city, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 51800,
    "name": "Suffolk city, VA",
    "year": 2017,
    "unemployment_rate": 4.1
  },
  {
    "id": 51810,
    "name": "Virginia Beach city, VA",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 51820,
    "name": "Waynesboro city, VA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 51830,
    "name": "Williamsburg city, VA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 51840,
    "name": "Winchester city, VA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 53001,
    "name": "Adams County, WA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 53003,
    "name": "Asotin County, WA",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 53005,
    "name": "Benton County, WA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 53007,
    "name": "Chelan County, WA",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 53009,
    "name": "Clallam County, WA",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 53011,
    "name": "Clark County, WA",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 53013,
    "name": "Columbia County, WA",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 53015,
    "name": "Cowlitz County, WA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 53017,
    "name": "Douglas County, WA",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 53019,
    "name": "Ferry County, WA",
    "year": 2017,
    "unemployment_rate": 11
  },
  {
    "id": 53021,
    "name": "Franklin County, WA",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 53023,
    "name": "Garfield County, WA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 53025,
    "name": "Grant County, WA",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 53027,
    "name": "Grays Harbor County, WA",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 53029,
    "name": "Island County, WA",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 53031,
    "name": "Jefferson County, WA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 53033,
    "name": "King County, WA",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 53035,
    "name": "Kitsap County, WA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 53037,
    "name": "Kittitas County, WA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 53039,
    "name": "Klickitat County, WA",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 53041,
    "name": "Lewis County, WA",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 53043,
    "name": "Lincoln County, WA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 53045,
    "name": "Mason County, WA",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 53047,
    "name": "Okanogan County, WA",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 53049,
    "name": "Pacific County, WA",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 53051,
    "name": "Pend Oreille County, WA",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 53053,
    "name": "Pierce County, WA",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 53055,
    "name": "San Juan County, WA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 53057,
    "name": "Skagit County, WA",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 53059,
    "name": "Skamania County, WA",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 53061,
    "name": "Snohomish County, WA",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 53063,
    "name": "Spokane County, WA",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 53065,
    "name": "Stevens County, WA",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 53067,
    "name": "Thurston County, WA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 53069,
    "name": "Wahkiakum County, WA",
    "year": 2017,
    "unemployment_rate": 7.2
  },
  {
    "id": 53071,
    "name": "Walla Walla County, WA",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 53073,
    "name": "Whatcom County, WA",
    "year": 2017,
    "unemployment_rate": 5
  },
  {
    "id": 53075,
    "name": "Whitman County, WA",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 53077,
    "name": "Yakima County, WA",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 54001,
    "name": "Barbour County, WV",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 54003,
    "name": "Berkeley County, WV",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 54005,
    "name": "Boone County, WV",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 54007,
    "name": "Braxton County, WV",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 54009,
    "name": "Brooke County, WV",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 54011,
    "name": "Cabell County, WV",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 54013,
    "name": "Calhoun County, WV",
    "year": 2017,
    "unemployment_rate": 10.8
  },
  {
    "id": 54015,
    "name": "Clay County, WV",
    "year": 2017,
    "unemployment_rate": 8.6
  },
  {
    "id": 54017,
    "name": "Doddridge County, WV",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 54019,
    "name": "Fayette County, WV",
    "year": 2017,
    "unemployment_rate": 6.4
  },
  {
    "id": 54021,
    "name": "Gilmer County, WV",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 54023,
    "name": "Grant County, WV",
    "year": 2017,
    "unemployment_rate": 5.6
  },
  {
    "id": 54025,
    "name": "Greenbrier County, WV",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 54027,
    "name": "Hampshire County, WV",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 54029,
    "name": "Hancock County, WV",
    "year": 2017,
    "unemployment_rate": 6
  },
  {
    "id": 54031,
    "name": "Hardy County, WV",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 54033,
    "name": "Harrison County, WV",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 54035,
    "name": "Jackson County, WV",
    "year": 2017,
    "unemployment_rate": 5.7
  },
  {
    "id": 54037,
    "name": "Jefferson County, WV",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 54039,
    "name": "Kanawha County, WV",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 54041,
    "name": "Lewis County, WV",
    "year": 2017,
    "unemployment_rate": 6.6
  },
  {
    "id": 54043,
    "name": "Lincoln County, WV",
    "year": 2017,
    "unemployment_rate": 6.8
  },
  {
    "id": 54045,
    "name": "Logan County, WV",
    "year": 2017,
    "unemployment_rate": 7.4
  },
  {
    "id": 54047,
    "name": "McDowell County, WV",
    "year": 2017,
    "unemployment_rate": 8.9
  },
  {
    "id": 54049,
    "name": "Marion County, WV",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 54051,
    "name": "Marshall County, WV",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 54053,
    "name": "Mason County, WV",
    "year": 2017,
    "unemployment_rate": 6.7
  },
  {
    "id": 54055,
    "name": "Mercer County, WV",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 54057,
    "name": "Mineral County, WV",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 54059,
    "name": "Mingo County, WV",
    "year": 2017,
    "unemployment_rate": 8.6
  },
  {
    "id": 54061,
    "name": "Monongalia County, WV",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 54063,
    "name": "Monroe County, WV",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 54065,
    "name": "Morgan County, WV",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 54067,
    "name": "Nicholas County, WV",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 54069,
    "name": "Ohio County, WV",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 54071,
    "name": "Pendleton County, WV",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 54073,
    "name": "Pleasants County, WV",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 54075,
    "name": "Pocahontas County, WV",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 54077,
    "name": "Preston County, WV",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 54079,
    "name": "Putnam County, WV",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 54081,
    "name": "Raleigh County, WV",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 54083,
    "name": "Randolph County, WV",
    "year": 2017,
    "unemployment_rate": 5.4
  },
  {
    "id": 54085,
    "name": "Ritchie County, WV",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 54087,
    "name": "Roane County, WV",
    "year": 2017,
    "unemployment_rate": 8.7
  },
  {
    "id": 54089,
    "name": "Summers County, WV",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 54091,
    "name": "Taylor County, WV",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 54093,
    "name": "Tucker County, WV",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 54095,
    "name": "Tyler County, WV",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 54097,
    "name": "Upshur County, WV",
    "year": 2017,
    "unemployment_rate": 6.1
  },
  {
    "id": 54099,
    "name": "Wayne County, WV",
    "year": 2017,
    "unemployment_rate": 5.8
  },
  {
    "id": 54101,
    "name": "Webster County, WV",
    "year": 2017,
    "unemployment_rate": 6.3
  },
  {
    "id": 54103,
    "name": "Wetzel County, WV",
    "year": 2017,
    "unemployment_rate": 7.5
  },
  {
    "id": 54105,
    "name": "Wirt County, WV",
    "year": 2017,
    "unemployment_rate": 7.9
  },
  {
    "id": 54107,
    "name": "Wood County, WV",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 54109,
    "name": "Wyoming County, WV",
    "year": 2017,
    "unemployment_rate": 7.1
  },
  {
    "id": 55001,
    "name": "Adams County, WI",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 55003,
    "name": "Ashland County, WI",
    "year": 2017,
    "unemployment_rate": 4.6
  },
  {
    "id": 55005,
    "name": "Barron County, WI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 55007,
    "name": "Bayfield County, WI",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 55009,
    "name": "Brown County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55011,
    "name": "Buffalo County, WI",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 55013,
    "name": "Burnett County, WI",
    "year": 2017,
    "unemployment_rate": 4.8
  },
  {
    "id": 55015,
    "name": "Calumet County, WI",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 55017,
    "name": "Chippewa County, WI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 55019,
    "name": "Clark County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55021,
    "name": "Columbia County, WI",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 55023,
    "name": "Crawford County, WI",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 55025,
    "name": "Dane County, WI",
    "year": 2017,
    "unemployment_rate": 2.4
  },
  {
    "id": 55027,
    "name": "Dodge County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55029,
    "name": "Door County, WI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 55031,
    "name": "Douglas County, WI",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 55033,
    "name": "Dunn County, WI",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 55035,
    "name": "Eau Claire County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55037,
    "name": "Florence County, WI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 55039,
    "name": "Fond du Lac County, WI",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 55041,
    "name": "Forest County, WI",
    "year": 2017,
    "unemployment_rate": 5.1
  },
  {
    "id": 55043,
    "name": "Grant County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55045,
    "name": "Green County, WI",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 55047,
    "name": "Green Lake County, WI",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 55049,
    "name": "Iowa County, WI",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 55051,
    "name": "Iron County, WI",
    "year": 2017,
    "unemployment_rate": 6.2
  },
  {
    "id": 55053,
    "name": "Jackson County, WI",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 55055,
    "name": "Jefferson County, WI",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 55057,
    "name": "Juneau County, WI",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 55059,
    "name": "Kenosha County, WI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 55061,
    "name": "Kewaunee County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55063,
    "name": "La Crosse County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55065,
    "name": "Lafayette County, WI",
    "year": 2017,
    "unemployment_rate": 2.5
  },
  {
    "id": 55067,
    "name": "Langlade County, WI",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 55069,
    "name": "Lincoln County, WI",
    "year": 2017,
    "unemployment_rate": 3.6
  },
  {
    "id": 55071,
    "name": "Manitowoc County, WI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 55073,
    "name": "Marathon County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55075,
    "name": "Marinette County, WI",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 55077,
    "name": "Marquette County, WI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 55078,
    "name": "Menominee County, WI",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 55079,
    "name": "Milwaukee County, WI",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 55081,
    "name": "Monroe County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55083,
    "name": "Oconto County, WI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 55085,
    "name": "Oneida County, WI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 55087,
    "name": "Outagamie County, WI",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 55089,
    "name": "Ozaukee County, WI",
    "year": 2017,
    "unemployment_rate": 2.7
  },
  {
    "id": 55091,
    "name": "Pepin County, WI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 55093,
    "name": "Pierce County, WI",
    "year": 2017,
    "unemployment_rate": 3.4
  },
  {
    "id": 55095,
    "name": "Polk County, WI",
    "year": 2017,
    "unemployment_rate": 3.8
  },
  {
    "id": 55097,
    "name": "Portage County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55099,
    "name": "Price County, WI",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 55101,
    "name": "Racine County, WI",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 55103,
    "name": "Richland County, WI",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 55105,
    "name": "Rock County, WI",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 55107,
    "name": "Rusk County, WI",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 55109,
    "name": "St. Croix County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55111,
    "name": "Sauk County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55113,
    "name": "Sawyer County, WI",
    "year": 2017,
    "unemployment_rate": 4.7
  },
  {
    "id": 55115,
    "name": "Shawano County, WI",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 55117,
    "name": "Sheboygan County, WI",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 55119,
    "name": "Taylor County, WI",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 55121,
    "name": "Trempealeau County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55123,
    "name": "Vernon County, WI",
    "year": 2017,
    "unemployment_rate": 3.1
  },
  {
    "id": 55125,
    "name": "Vilas County, WI",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 55127,
    "name": "Walworth County, WI",
    "year": 2017,
    "unemployment_rate": 3.3
  },
  {
    "id": 55129,
    "name": "Washburn County, WI",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 55131,
    "name": "Washington County, WI",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 55133,
    "name": "Waukesha County, WI",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 55135,
    "name": "Waupaca County, WI",
    "year": 2017,
    "unemployment_rate": 3.2
  },
  {
    "id": 55137,
    "name": "Waushara County, WI",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 55139,
    "name": "Winnebago County, WI",
    "year": 2017,
    "unemployment_rate": 3
  },
  {
    "id": 55141,
    "name": "Wood County, WI",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 56001,
    "name": "Albany County, WY",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 56003,
    "name": "Big Horn County, WY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 56005,
    "name": "Campbell County, WY",
    "year": 2017,
    "unemployment_rate": 4.9
  },
  {
    "id": 56007,
    "name": "Carbon County, WY",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 56009,
    "name": "Converse County, WY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 56011,
    "name": "Crook County, WY",
    "year": 2017,
    "unemployment_rate": 3.5
  },
  {
    "id": 56013,
    "name": "Fremont County, WY",
    "year": 2017,
    "unemployment_rate": 5.5
  },
  {
    "id": 56015,
    "name": "Goshen County, WY",
    "year": 2017,
    "unemployment_rate": 2.9
  },
  {
    "id": 56017,
    "name": "Hot Springs County, WY",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 56019,
    "name": "Johnson County, WY",
    "year": 2017,
    "unemployment_rate": 4.2
  },
  {
    "id": 56021,
    "name": "Laramie County, WY",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 56023,
    "name": "Lincoln County, WY",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 56025,
    "name": "Natrona County, WY",
    "year": 2017,
    "unemployment_rate": 5.2
  },
  {
    "id": 56027,
    "name": "Niobrara County, WY",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 56029,
    "name": "Park County, WY",
    "year": 2017,
    "unemployment_rate": 4.3
  },
  {
    "id": 56031,
    "name": "Platte County, WY",
    "year": 2017,
    "unemployment_rate": 3.7
  },
  {
    "id": 56033,
    "name": "Sheridan County, WY",
    "year": 2017,
    "unemployment_rate": 3.9
  },
  {
    "id": 56035,
    "name": "Sublette County, WY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 56037,
    "name": "Sweetwater County, WY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 56039,
    "name": "Teton County, WY",
    "year": 2017,
    "unemployment_rate": 2.8
  },
  {
    "id": 56041,
    "name": "Uinta County, WY",
    "year": 2017,
    "unemployment_rate": 4.5
  },
  {
    "id": 56043,
    "name": "Washakie County, WY",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 56045,
    "name": "Weston County, WY",
    "year": 2017,
    "unemployment_rate": 4
  },
  {
    "id": 72001,
    "name": "Adjuntas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 15
  },
  {
    "id": 72003,
    "name": "Aguada Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.9
  },
  {
    "id": 72005,
    "name": "Aguadilla Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14.5
  },
  {
    "id": 72007,
    "name": "Aguas Buenas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.5
  },
  {
    "id": 72009,
    "name": "Aibonito Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14.2
  },
  {
    "id": 72011,
    "name": "Anasco Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.5
  },
  {
    "id": 72013,
    "name": "Arecibo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.7
  },
  {
    "id": 72015,
    "name": "Arroyo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 17.7
  },
  {
    "id": 72017,
    "name": "Barceloneta Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14
  },
  {
    "id": 72019,
    "name": "Barranquitas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.3
  },
  {
    "id": 72021,
    "name": "Bayamon Municipio, PR",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 72023,
    "name": "Cabo Rojo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13.6
  },
  {
    "id": 72025,
    "name": "Caguas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 9.1
  },
  {
    "id": 72027,
    "name": "Camuy Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.6
  },
  {
    "id": 72029,
    "name": "Canovanas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 9.7
  },
  {
    "id": 72031,
    "name": "Carolina Municipio, PR",
    "year": 2017,
    "unemployment_rate": 7.8
  },
  {
    "id": 72033,
    "name": "Catano Municipio, PR",
    "year": 2017,
    "unemployment_rate": 9.1
  },
  {
    "id": 72035,
    "name": "Cayey Municipio, PR",
    "year": 2017,
    "unemployment_rate": 10.1
  },
  {
    "id": 72037,
    "name": "Ceiba Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13.5
  },
  {
    "id": 72039,
    "name": "Ciales Municipio, PR",
    "year": 2017,
    "unemployment_rate": 16.1
  },
  {
    "id": 72041,
    "name": "Cidra Municipio, PR",
    "year": 2017,
    "unemployment_rate": 8.4
  },
  {
    "id": 72043,
    "name": "Coamo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 16.2
  },
  {
    "id": 72045,
    "name": "Comerio Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.7
  },
  {
    "id": 72047,
    "name": "Corozal Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.3
  },
  {
    "id": 72049,
    "name": "Culebra Municipio, PR",
    "year": 2017,
    "unemployment_rate": 4.4
  },
  {
    "id": 72051,
    "name": "Dorado Municipio, PR",
    "year": 2017,
    "unemployment_rate": 6.9
  },
  {
    "id": 72053,
    "name": "Fajardo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13.3
  },
  {
    "id": 72054,
    "name": "Florida Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14.3
  },
  {
    "id": 72055,
    "name": "Guanica Municipio, PR",
    "year": 2017,
    "unemployment_rate": 18.3
  },
  {
    "id": 72057,
    "name": "Guayama Municipio, PR",
    "year": 2017,
    "unemployment_rate": 15.6
  },
  {
    "id": 72059,
    "name": "Guayanilla Municipio, PR",
    "year": 2017,
    "unemployment_rate": 16.4
  },
  {
    "id": 72061,
    "name": "Guaynabo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 5.3
  },
  {
    "id": 72063,
    "name": "Gurabo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 7.3
  },
  {
    "id": 72065,
    "name": "Hatillo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14
  },
  {
    "id": 72067,
    "name": "Hormigueros Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.7
  },
  {
    "id": 72069,
    "name": "Humacao Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14
  },
  {
    "id": 72071,
    "name": "Isabela Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13.4
  },
  {
    "id": 72073,
    "name": "Jayuya Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13
  },
  {
    "id": 72075,
    "name": "Juana Diaz Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.9
  },
  {
    "id": 72077,
    "name": "Juncos Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.5
  },
  {
    "id": 72079,
    "name": "Lajas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 19.4
  },
  {
    "id": 72081,
    "name": "Lares Municipio, PR",
    "year": 2017,
    "unemployment_rate": 18.6
  },
  {
    "id": 72083,
    "name": "Las Marias Municipio, PR",
    "year": 2017,
    "unemployment_rate": 20.6
  },
  {
    "id": 72085,
    "name": "Las Piedras Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12
  },
  {
    "id": 72087,
    "name": "Loiza Municipio, PR",
    "year": 2017,
    "unemployment_rate": 9.6
  },
  {
    "id": 72089,
    "name": "Luquillo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.8
  },
  {
    "id": 72091,
    "name": "Manati Municipio, PR",
    "year": 2017,
    "unemployment_rate": 10.6
  },
  {
    "id": 72093,
    "name": "Maricao Municipio, PR",
    "year": 2017,
    "unemployment_rate": 20.1
  },
  {
    "id": 72095,
    "name": "Maunabo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 17.3
  },
  {
    "id": 72097,
    "name": "Mayaguez Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14
  },
  {
    "id": 72099,
    "name": "Moca Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14.7
  },
  {
    "id": 72101,
    "name": "Morovis Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.4
  },
  {
    "id": 72103,
    "name": "Naguabo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.1
  },
  {
    "id": 72105,
    "name": "Naranjito Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.8
  },
  {
    "id": 72107,
    "name": "Orocovis Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14.3
  },
  {
    "id": 72109,
    "name": "Patillas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 19.7
  },
  {
    "id": 72111,
    "name": "Penuelas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 17.5
  },
  {
    "id": 72113,
    "name": "Ponce Municipio, PR",
    "year": 2017,
    "unemployment_rate": 11.6
  },
  {
    "id": 72115,
    "name": "Quebradillas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 15.8
  },
  {
    "id": 72117,
    "name": "Rincon Municipio, PR",
    "year": 2017,
    "unemployment_rate": 15.3
  },
  {
    "id": 72119,
    "name": "Rio Grande Municipio, PR",
    "year": 2017,
    "unemployment_rate": 9.7
  },
  {
    "id": 72121,
    "name": "Sabana Grande Municipio, PR",
    "year": 2017,
    "unemployment_rate": 16.8
  },
  {
    "id": 72123,
    "name": "Salinas Municipio, PR",
    "year": 2017,
    "unemployment_rate": 18.7
  },
  {
    "id": 72125,
    "name": "San German Municipio, PR",
    "year": 2017,
    "unemployment_rate": 15.7
  },
  {
    "id": 72127,
    "name": "San Juan Municipio, PR",
    "year": 2017,
    "unemployment_rate": 7
  },
  {
    "id": 72129,
    "name": "San Lorenzo Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.8
  },
  {
    "id": 72131,
    "name": "San Sebastian Municipio, PR",
    "year": 2017,
    "unemployment_rate": 17.6
  },
  {
    "id": 72133,
    "name": "Santa Isabel Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13.5
  },
  {
    "id": 72135,
    "name": "Toa Alta Municipio, PR",
    "year": 2017,
    "unemployment_rate": 7.7
  },
  {
    "id": 72137,
    "name": "Toa Baja Municipio, PR",
    "year": 2017,
    "unemployment_rate": 8.1
  },
  {
    "id": 72139,
    "name": "Trujillo Alto Municipio, PR",
    "year": 2017,
    "unemployment_rate": 5.9
  },
  {
    "id": 72141,
    "name": "Utuado Municipio, PR",
    "year": 2017,
    "unemployment_rate": 13.9
  },
  {
    "id": 72143,
    "name": "Vega Alta Municipio, PR",
    "year": 2017,
    "unemployment_rate": 10.7
  },
  {
    "id": 72145,
    "name": "Vega Baja Municipio, PR",
    "year": 2017,
    "unemployment_rate": 12.4
  },
  {
    "id": 72147,
    "name": "Vieques Municipio, PR",
    "year": 2017,
    "unemployment_rate": 14.5
  },
  {
    "id": 72149,
    "name": "Villalba Municipio, PR",
    "year": 2017,
    "unemployment_rate": 19.4
  },
  {
    "id": 72151,
    "name": "Yabucoa Municipio, PR",
    "year": 2017,
    "unemployment_rate": 16.5
  },
  {
    "id": 72153,
    "name": "Yauco Municipio, PR",
    "year": 2017,
    "unemployment_rate": 17.2
  }
]
export default counties;