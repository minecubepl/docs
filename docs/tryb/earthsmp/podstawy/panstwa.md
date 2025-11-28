---
sidebar_position: 1
description: Dowiedz się, jak tworzyć i zarządzać własnym państwem na serwerze EarthSMP! Naucz się komend, dodawania członków, tworzenia sojuszy i wypowiadania wojen.
keywords:
  - państwa
  - lands
  - sojusze
  - wojna
  - komendy
  - ochrona terenu
  - zarządzanie
  - EarthSMP
---

# 🌍 Państwa

<!-- TODO: Państwa wymagają aktualizacji do nowej Edycji. -->

## 🌐 Wprowadzenie {#wprowadzenie}

Na serwerze **EarthSMP**, gracze mogą tworzyć i zarządzać swoimi własnymi państwami. Każde państwo może mieć swoje własne prawa, członków i regiony. Dzięki temu systemowi możesz zabezpieczyć swój teren przed innymi graczami, prowadzić dyplomację oraz współpracować z przyjaciółmi w ramach jednego państwa. 🌎🤝

## 🫅 Tworzenie państwa {#tworzenie}

Aby stworzyć swoje własne państwo, użyj komendy:

**Koszt:** 15k 💰

```
/kraj create <nazwa>
```

Przykład:

```
/kraj create Argentyna
```

Po utworzeniu państwa, automatycznie staniesz się jego liderem 👑.

### 🏕️ Tworzenie obozu {#tworzenie-obozu}

Jeśli jesteś nowy i jeszcze nie masz 15k na stworzenie państwa, możesz stworzyć obóz za darmo. Obóz jest dostępny na 3 dni.

```
/kraj createcamp <nazwa>
```

## 🏛️ Zarządzanie państwem {#zarzadzanie}

### 👥 Dodawanie członków {#dodawanie-czlonkow}

Aby dodać członka do swojego państwa, użyj komendy:

```
/kraj trust <nazwa_gracza>
```

Gracz, którego zaprosisz, musi zaakceptować zaproszenie komendą:

```
/kraj accept <nazwa_państwa>
```

### ❌ Usuwanie członków {#usuwanie-czlonkow}

Aby usunąć członka z państwa, użyj komendy:

```
/kraj untrust <nazwa_gracza>
```

### 🎖️ Nadawanie rang {#nadawanie-rang}

Możesz nadawać różne rangi członkom państwa, co pozwoli im na wykonywanie różnych czynności:

```
/kraj setrole <gracz> <obszar> <rola>
```

## 🧑‍💻 Podstawowe komendy {#podstawowe-komendy}

_Wkrótce dostępne..._

## 🔧 Inne funkcje {#inne-funkcje}

### 🤝 Sojusze {#sojusze}

Możesz tworzyć sojusze z innymi państwami, co pozwoli na współpracę i wzajemną ochronę. Aby zaprosić inne państwo do sojuszu, użyj komendy:

```
/kraj relations allies add <nazwa_państwa>
```

### ⚔️ Wojny {#wojny}

Od piątku do soboty w godzinach od 12:00 do 18:00 można wypowiedzieć wojnę bez akceptacji drugiej strony. Czas przygotowania do wojny to 24 godziny.  
Państwo broniące może w ciągu tych 24 godzin odwołać się poprzez odpowiedni ticket na naszym [Discordzie](https://dc.minecube.pl). Takie odwołanie od wojny musi być podstawne i może zostać odrzucone lub zaakceptowane.

Aby wypowiedzieć wojnę użyj komendy:

```
/wojna declare <nazwa_państwa>
```

### 💸 Ekonomia {#ekonomia}

_Wkrótce dostępne..._

## ❓ FAQ {#faq}

### 👑 Jak mogę zmienić lidera państwa? {#jak-zmienic-lidera}

Aby przekazać liderowanie innej osobie, użyj komendy:

```
/kraj setowner <nazwa_gracza>
```

### 🏡 Jak mogę teleportować się do mojego państwa? {#teleport-do-panstwa}

Aby teleportować się do swojego państwa, użyj komendy:

```
/kraj spawn
```

### 📝 Czy mogę zmienić nazwę państwa? {#zmiana-nazwy}

Tak, aby zmienić nazwę swojego państwa, użyj komendy:

```
/kraj rename <nowa_nazwa>
```

### 📝 Czy mogę zmienić TAG państwa? {#zmiana-tagu}

Tak, tag swojego kraju możesz zmienić w gui `/kraj menu` -> Ustawienia Różne.
> Tag kraju może być równiez kolorowy oraz posiadać formatowanie.

### 🎨 Jak zmienić nazwę państwa na kolorową? {#zmiana-nazwy-kolor}

Aby to zrobić wystarczy że wpiszesz komendę do zmiany a za nią nazwe kraju z kodami kolorów:

```
/kraj rename <nowa_nazwa>
```

Przykład:

```
/kraj rename &f&lPol&c&lska
```

Teraz uzyskamy biało-czerwony napis "Polska", który będzie pogrubiony. Dostępne kody kolorów możesz sprawdzić pod komendą `/colors`.
