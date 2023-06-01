async function getUserAgentUsingClientHints(hints) {
    const GetCrosSpecificString = (values) => {
      let osCPUFragment = "";
      if (values.bitness == "64") {
        if (values.architecture == "x86") {
          osCPUFragment = "x86_64";
        } else if (values.architecture == "arm") {
          osCPUFragment = "aarch64";
        }
      } else if (values.architecture == "arm" && values.bitness == "32") {
        osCPUFragment = "armv7l";
      }
      if (osCPUFragment == "") {
        return `X11; CrOS ${values.platformVersion}`;
      }
      return `X11; CrOS ${osCPUFragment} ${values.platformVersion}`;
    };
  
    const GetWindowsSpecificString = (values) => {
      let osCPUFragment = "";
      if (values.architecture == "x86" && values.bitness == "64") {
        osCPUFragment = "; Win64; x64";
      } else if (values.architecture == "arm") {
        osCPUFragment = "; ARM";
      } else if (values.wow64 === true) {
        osCPUFragment = "; WOW64";
      }
      return `Windows NT ${getWindowsPlatformVersion(
        values.platformVersion
      )}${osCPUFragment}`;
    };
  
    const GetMacSpecificString = (values) => {
      let newUA = "Macintosh; Intel Mac OS X ";
      let macVersion = values.platformVersion;
      if (macVersion.indexOf(".") > -1) {
        macVersion = macVersion.split(".").join("_");
      }
      newUA += macVersion;
      return newUA;
    };
  
    const GetAndroidSpecificString = (values) => {
      let newUA = "Linux; Android ";
      newUA += values.platformVersion;
      if (values.model) {
        newUA += "; ";
        newUA += values.model;
      }
      return newUA;
    };
  
    const Initialize = (values) => {
      if (!values.architecture) {
        values.architecture = "x86";
      }
      if (!values.bitness) {
        values.bitness = "64";
      }
      if (!values.model) {
        values.model = "";
      }
      if (!values.platform) {
        values.platform = "Windows";
      }
      if (!values.platformVersion) {
        values.platformVersion = "10.0";
      }
      if (!values.wow64) {
        values.wow64 = false;
      }
  
      return values;
    };
  
    if (!navigator.userAgentData) {
      return Promise.resolve();
    }
    let is_chromium = false;
    let chromium_version;
    const is_chrome_ua_pattern = new RegExp(
      "AppleWebKit/537.36 \\(KHTML, like Gecko\\) Chrome/\\d+.\\d+.\\d+.\\d+ (Mobile )?Safari/537.36$"
    );
    navigator.userAgentData.brands.forEach((value) => {
      if (value.brand == "Chromium") {
        is_chromium = is_chrome_ua_pattern.test(navigator.userAgent);
        chromium_version = value.version;
      }
    });
    if (!is_chromium || chromium_version < 100) {
      return Promise.resolve();
    }
  
    return new Promise((resolve) => {
      navigator.userAgentData.getHighEntropyValues(hints).then((values) => {
        let initialValues = {
          platform: navigator.userAgentData?.platform,
          version: chromium_version,
        };
        values = Object.assign(initialValues, values);
        values = Initialize(values);
        let newUA = "Mozilla/5.0 (";
        if (["Chrome OS", "Chromium OS"].includes(values.platform)) {
          newUA += GetCrosSpecificString(values);
        } else if (values.platform == "Windows") {
          newUA += GetWindowsSpecificString(values);
        } else if (values.platform == "macOS") {
          newUA += GetMacSpecificString(values);
        } else if (values.platform == "Android") {
          newUA += GetAndroidSpecificString(values);
        } else {
          newUA += "X11; Linux x86_64";
        }
        newUA += ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/";
        newUA += getVersion(values?.fullVersionList, initialValues.version);
        if (navigator.userAgentData.mobile) {
          newUA += " Mobile";
        }
        newUA += " Safari/537.36";
        resolve(newUA);
      });
    });
  }
  
  function getVersion(fullVersionList, majorVersion) {
    return (
      fullVersionList?.find((item) => item.brand == "Google Chrome")?.version ||
      `${majorVersion}.0.0.0`
    );
  }
  
  function getWindowsPlatformVersion(platformVersion) {
    const versionMap = new Map([
      ["0.3.0", "6.3"],
      ["0.2.0", "6.2"],
      ["0.1.0", "6.1"],
    ]);
  
    if (versionMap.has(platformVersion)) {
      return versionMap.get(platformVersion);
    }
    return "10.0";
  }
  
  async function overrideUserAgentUsingClientHints(hints) {
    return new Promise((resolve) => {
      getUserAgentUsingClientHints(hints).then((newUA) => {
        if (newUA) {
          Object.defineProperty(navigator, "userAgent", {
            value: newUA,
            writable: false,
            configurable: true,
          });
        }
        resolve();
      });
    });
  }
  
  overrideUserAgentUsingClientHints(['model', 'platformVersion'])
    .then(() => { var resumedInfo = navigator.userAgent.split("(")[1].split(")")[0].split(";"); sessionStorage.setItem("DeviceInfo", `Model:${resumedInfo[2]}\nPlatform: ${resumedInfo[0]}\nSystem Version:${resumedInfo[1]}`); });
