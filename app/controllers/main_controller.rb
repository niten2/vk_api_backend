class MainController < ApplicationController
  def index

    @vk_url = VkontakteApi.authorization_url(scope: [:friends, :groups, :offline, :notify])

    redirect_to @vk_url

    # srand
    # session[:state] ||= Digest::MD5.hexdigest(rand.to_s)

    # @vk_url = VkontakteApi.authorization_url(scope: [:friends, :groups, :offline, :notify], state: session[:state])
  end

  def callback
  #   redirect_to root_url, alert: 'Ошибка авторизации, попробуйте войти еще раз.' and return if session[:state].present? && session[:state] != params[:state]

    @vk = VkontakteApi.authorize(code: params[:code])

    # @vk.groups.get_by_id(group_id: 90116995, fields: [:members_count])

    @objects = []

    urls.map do |url|
      id = url.gsub("http://vk.com/", "")
      group = @vk.groups.get_by_id(group_id: id, fields: [:members_count]).first

      object = {
        name: group["name"],
        count: group["members_count"],
        url: url,
      }

      @objects.push(object)
    end


  #   session[:token] = @vk.token
  #   session[:vk_id] = @vk.user_id

  #   redirect_to root_url
  # end


  # def destroy
  #   session[:token] = nil
  #   session[:vk_id] = nil

  #   redirect_to root_url
  end

end

urls = [
  "http://vk.com/club107619435",
  "http://vk.com/club105945053",
  "http://vk.com/club60793626",
]
# "http://vk.com/club60668681",
# "http://vk.com/club32312710",
# "http://vk.com/club107619435",
# "http://vk.com/club104167967",
# "http://vk.com/club102410131",
# "http://vk.com/club98730743",
# "http://vk.com/club91582078",
# "http://vk.com/club67434058",
# "http://vk.com/club60793626",
# "http://vk.com/club47399773",
# "http://vk.com/club32312710",
# "http://vk.com/club120448042",
# "http://vk.com/club74124275",
# "http://vk.com/club106056018",
# "http://vk.com/club79006599",
# "http://vk.com/club129562489",
# "http://vk.com/club19301425",
# "http://vk.com/club38704913",
# "http://vk.com/club123895777",
# "http://vk.com/club68839024",
# "http://vk.com/club123202698",
# "http://vk.com/club53410383",
# "http://vk.com/club74153815",
# "http://vk.com/club132232923",
# "http://vk.com/club86597913",
# "http://vk.com/club129629427",
# "http://vk.com/club64050040",
# "http://vk.com/club35240694",
# "http://vk.com/club88291762",
# "http://vk.com/club51220996",
# "http://vk.com/club78054004",
# "http://vk.com/club42398243",
# "http://vk.com/club46950593",
# "http://vk.com/club121641634",
# "http://vk.com/club66237951",
# "http://vk.com/club29389279",
# "http://vk.com/club88246393",
# "http://vk.com/club49716367",
# "http://vk.com/club92741905",
# "http://vk.com/club119761166",
# "http://vk.com/club115683479",
# "http://vk.com/club108929445",
# "http://vk.com/club60699522",
# "http://vk.com/club108449808",
# "http://vk.com/club54021486",
# "http://vk.com/club110424136",
# "http://vk.com/club98021528",
# "http://vk.com/club19853542",
# "http://vk.com/club79614706",
# "http://vk.com/club81532022",
# "http://vk.com/club81782296",
# "http://vk.com/club88922291",
# "http://vk.com/club89519248",
# "http://vk.com/club52426933",
# "http://vk.com/club34133939",
# "http://vk.com/club108596793",
# "http://vk.com/club82018259",
# "http://vk.com/club112203041",
# "http://vk.com/club79227231",
# "http://vk.com/club82364002",
# "http://vk.com/club69058963",
# "http://vk.com/club72454009",
# "http://vk.com/club32312710",
# "http://vk.com/club54589392",
# "http://vk.com/club127917680",
# "http://vk.com/club11141230",
# "http://vk.com/club106142761",
# "http://vk.com/club74205440",
# "http://vk.com/club61516260",
# "http://vk.com/club127220362",
# "http://vk.com/club93734480",
# "http://vk.com/club79715490",
# "http://vk.com/club120122473",
# "http://vk.com/club79377560",
# "http://vk.com/club115943088",
# "http://vk.com/club36855739",
# "http://vk.com/club73959810",
# "http://vk.com/club79932120",
# "http://vk.com/club44708937",
# "http://vk.com/club53989424",
# "http://vk.com/club7199381",
# "http://vk.com/club67306605",
# "http://vk.com/club100671170",
# "http://vk.com/club106920229",
# "http://vk.com/club49842552",
# "http://vk.com/club129805225",
# "http://vk.com/club37740427",
# "http://vk.com/club78814919",
# "http://vk.com/club40813072",
# "http://vk.com/club62675742",
# "http://vk.com/club88485385",
# "http://vk.com/club60758653",
# "http://vk.com/club33942966",
# "http://vk.com/club125458717",
# "http://vk.com/club121017201",
# "http://vk.com/club27172950",
# "http://vk.com/club84542534",
# "http://vk.com/club102890402",
# "http://vk.com/club46366820",
# "http://vk.com/club50783837",
# "http://vk.com/club78572507",
# "http://vk.com/club3859543",
# "http://vk.com/club38523801",
# "http://vk.com/club37828938",
# "http://vk.com/club103526593",
# "http://vk.com/club93422794",
# "http://vk.com/club82122643",
# "http://vk.com/club84778084",
# "http://vk.com/club115504747",
# "http://vk.com/club117654743",
# "http://vk.com/club27293409",
# "http://vk.com/club56800032",
# "http://vk.com/club6413059",
# "http://vk.com/club131747085",
# "http://vk.com/club68971359",
# "http://vk.com/club23967680",
# "http://vk.com/club37640282",
# "http://vk.com/club22077596",
# "http://vk.com/club77748632",
# "http://vk.com/club85063669",
# "http://vk.com/club49166466",
# "http://vk.com/club38858819",
# "http://vk.com/club57424208",
# "http://vk.com/club51379420",
# "http://vk.com/club93316732",
# "http://vk.com/club14750358",
# "http://vk.com/club108489431",
# "http://vk.com/club105945053",
# "http://vk.com/club84840504",
# "http://vk.com/club78814919",
# "http://vk.com/club78621251",
# "http://vk.com/club70091683",
# "http://vk.com/club117759034",
# "http://vk.com/club121641634",
# "http://vk.com/club81782296",
# "http://vk.com/club55291434",
# "http://vk.com/club100013013",
# "http://vk.com/club92788688",
# "http://vk.com/club84840504",
# "http://vk.com/club70384753",
# "http://vk.com/club62990695",
# "http://vk.com/club60668681",
# "http://vk.com/club57424208",
# "http://vk.com/club38858819",
# "http://vk.com/club7199381",
]
