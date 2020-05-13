# Tux ile Linux Öğreniyorum

 Tux ile Linux Öğreniyorum Kraft Yazılım Ekibi'nin React Native teknolojisi kullanarak inşa ettiği bir mobil uygulamadır. Uygulamanın amacı korkusu merak duygusundan üstün gelen, daha önce GNU/Linux işletim sistemi ile tanışmamış ya da öğrenmek için uygun bir araç arayan, %100 Türkçe kaynak kriterine sahip kullanıcı kitlesine ulaşmaktır. 

 Uygulama yapısı aşağıda anlatıldığı gibidir :

	1 - Kullanıcı seviyesine uygun olan aşama ile uygulamaya başlar.

	2 - Uygulama içerisindeki videolar ile GNU/Linux komutlarını öğrenir.

	3 - Uygulama içerisinde yer alan terminal vasıtası ile interaktif olarak öğrendiklerini deneme imkanı bulur.

	4 - Destekleyici sorular ile öğrendiklerini pekiştirir.

## Geliştiricilerden Not 

 1 - Proje içerisindeki sayfaların kodları LLWT/src/Pages içerisinde bulunmaktadır.
 
 2 - Projenin JSON tipi dosyaları src/data içerisinde bulunmaktadır. **Bu dosyalar proje içinde GitHub üzerinden online olarak çekilmektedir !**

## Gereksinimler

 Uygulama kaynak kodlarını çalıştırmak ve sonrasında değiştirmek/geliştirmek için aşağıdaki gereksinimlere sahip olunması gerekmektedir.

	1 - React Native ve Bileşenleri (RN-CLI, NodeJS vb.)

	2 - Android Studio veya GeanyMotion

	3 - Java JDK 1.8 

## Gereksinimlerin Kurulması

#### React Native

 React Native şu anda hem Windows hem de çeşitli Linux dağıtımları üzerinde stabil olarak çalışmakta. Ancak ekip olarak açık kaynaklı yazılımları desteklediğimizden burada GNU/Linux dağıtımları üzerine kurulumu yer alacaktır. Windows kullanıcıları [buradan](https://medium.com/mol42/windows-%C3%BCzerinde-react-native-kurulumu-4de15e0e33b9) kurulum adımlarına ulaşabilirler.

 **React Native ve Bileşenlerinin Ubuntu 18.04 LTS dağıtımı üzerine kurulması.**

1. Öncelikle paket yöneticimizi güncelleyelim.

> sudo apt update

2. Paket yöneticimizi güncelledikten sonra NodeJS kurulumu ile başlayalım.

> sudo apt install nodejs npm

3. Kurulumun doğruluğunu teyit etmek için NodeJS versiyonumuzu öğrenelim.

> nodejs --version

4. Eğer NodeJS versiyonumuzu görebiliyorsak emin adımlarla ilerliyoruz demektir. Şimdi ise sırada npm’i kurmak var. Onu da şuradaki komutumuz ile gerçekleştirelim.

> sudo apt install npm

5. Npm kurulumunun doğruluğunu teyit etmek için yine versiyon doğrulaması yapalım.

> npm --version

6. Npm’in kurulumunu da başarıyla tamamladığımıza göre sırada React Native CLI’ ı kurmak var. Onu da şöyle yapabiliriz.

> npm install -g react-native-cli

 Eğer burada ‘npmlog’ modülü bulunamıyor gibi bir hata alırsanız aşağıdaki komut ile npm’i direk yükleyebilirsiniz.

> curl -0 -L https://npmjs.org/install.sh | sudo sh

**Eğer hata almıyorsanız bunu yapmanıza gerek yoktur.**


#### Java JDK Modülünün Kurulması

1. Bu adımı da başarıyla tamamladıktan sonra şimdi sırada JDK’yı kurmak var. Eğer bu adıma kadar geldiyseniz sabırlı olun. Dakikalar içinde React Native geliştirmeye başlayabileceksiniz. Öncelikle Oracle’ın PPA’sını eklememiz gerekiyor.

> sudo add-apt-repository ppa:webupd8team/java

> sudo apt update

2. React Native için önerilen JDK sürümü 1.8 olduğundan bu sürümü yüklememiz gerekiyor. Ayrıca makineniz üzerine daha önceden kurulmuş olan farklı java sürümleri olabileceğinden 1.8 sürümünü varsayılan olarak ayarlamalıyız.

> sudo apt install oracle-java8-installer

> sudo apt install oracle-java8-set-default

3. Kurulumu teyit etmek için java versiyonumuzu kontrol edelim.

> javac -version

#### Android Studio Kurulumu ve Konfigürasyonlarının Yapılması

1. React Native çıktılarını görebilmek için bir emülator ya da Android işletim sistemine sahip fiziksel bir cihaza ihtiyaç duyarız. Bu sebeple de Android Studio’ya ihtiyacımız var. Android Studio’yu buradan indirdikten sonra diğer adımları uygulamaya geçebiliriz. Öncelikle ortam değişkenlerimizi ayarlayarak başlayalım. Terminali açın ve şu komutu çalıştırın.

> $HOME/.bash_profile

2. Son adımımız Açılan dosyaya aşağıdaki satırları ekleyerek devam edelim.

> export ANDROID_HOME=$HOME/Android/Sdk

> export PATH=$PATH:$ANDROID_HOME/emulator

> export PATH=$PATH:$ANDROID_HOME/tools

> export PATH=$PATH:$ANDROID_HOME/tools/bin

> export PATH=$PATH:$ANDROID_HOME/platform-tools

3. Şimdi ise örnek React Native uygulamasını çalıştırarak kurulumun doğruluğunu teyit edebilirsiniz. Öncelikle bir uygulama klasörü oluşturalım.

> react-native init SampleProject

4. Örnek projenizi çalıştırmak için bir Emulatör ya da Android işletim sistemi yüklü fiziksel bir cihaza ihtiyacınız olduğundan bahsetmiştik. Bu adımda Android Studio içindeki AVD Manager içinden bu iki opsiyondan birini seçin. Seçiminizin sisteme tanımlandığından emin olmak için aşağıdaki komutu çalıştıralım.

> adb devices

**Çıkan listelemede cihazınızın adını görmeniz gerekmektedir.**

5. Proje klasörümüzün içine girelim ve metro server’ımızı başlatalım.

> cd SampleProject
> npx react-native start

6. Şimdi ise örnek prejenizi çalıştırabilirsiniz.

> npx react-native run-android

![](https://miro.medium.com/max/600/1*qcBpzVPA5Lm2Dudlm7tzyw.png)

**Yukarıdaki görüntüye eriştiyseniz kurulumu başarı ile tamamladığınızı söyleyebiliriz.**

## Projenin Kurulumu

 Gereksinimleri sağlayan kullanıcıların proje klasörüne girip,

> npm install 

 komutunu çalıştırmaları yeterli olacaktır.
 
 ### Projenin Çalıştırılması

 Öncelikle metro server'ı başlatalım.

> npx react-native start

 Sonrasında projeyi başlatacak fiziksel veya sanal bir cihaz olduğundan emin olalım.

> adb devices

 Listede cihazımızın adını görüyorsak projeyi çalıştırmak için hazırız demektir. Projeyi cihazımızda başlatalım.

> npx react-native run-android

## References 

 Kurulum ile ilgili geliştiricilerimizden birinin [makalesi](https://medium.com/@zekiahmetbayar/react-native-ile-linux-%C3%BCzerinde-mobil-uygulama-geli%C5%9Ftirmek-48d1589407cd) referans olarak alınmıştır.
 
  Uygulamanın tüm detaylarını öğrenmek için ilgili web sitesine [buradan](https://kraftyazilim.github.io) erişebilirsiniz.















































	
