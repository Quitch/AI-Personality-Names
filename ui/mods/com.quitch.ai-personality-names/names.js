var aiPersonalityNamesLoaded;

function aiPersonalityNames() {
  if (aiPersonalityNamesLoaded) {
    return;
  }

  aiPersonalityNamesLoaded = true;

  var replaceHtml = function (htmlClass, file) {
    var path = "coui://ui/mods/com.quitch.ai-personality-names/";
    $(htmlClass).replaceWith(loadHtml(path + file));
  };

  replaceHtml("div.div_player_name.truncate", "names.html");

  //TODO show personalities on spectator panel too
}
aiPersonalityNames();
