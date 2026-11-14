---
title: 6xx · Passerelle et liaison
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-6-gateway-link.html
---

# 6xx · Passerelle et liaison

Codes 601–602 : la liaison Bluetooth avec la passerelle est perdue, ou la passerelle est connectée mais n'envoie rien.

Les codes 6xx concernent la passerelle et la liaison radio entre la passerelle et l'iPad ou l'iPhone. Tant que la liaison est coupée, tous les chiffres à l'écran sont périmés : l'écran est assombri et les alarmes des rangs attendent.

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 601 · Liaison avec la passerelle perdue {#c601}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Bridge link lost »** (liaison avec la passerelle perdue), une fois la liaison coupée depuis 3 secondes. Une pastille rouge au milieu de l'écran indique ce que fait l'app, par exemple **« Looking for the bridge… »** (recherche de la passerelle). La fenêtre se ferme d'elle-même quand la passerelle répond de nouveau.

**Que faire :**

1. Vérifiez que la passerelle est sous tension.
2. Vérifiez que l'iPad ou l'iPhone est toujours en cabine, près de la passerelle.
3. Patientez : l'app se reconnecte toute seule. Si ce n'est pas le cas, utilisez **« Reconnect »** (reconnecter) dans **« Settings »** (réglages) › **« Machine »** › **« Bridge »** (passerelle).

## 602 · Passerelle muette {#c602}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** La pastille rouge **« Bridge is silent… »** (la passerelle est muette) : la liaison existe, mais aucune donnée n'arrive. L'écran est assombri ; après 3 secondes, la fenêtre **« Bridge link lost »** (liaison avec la passerelle perdue) s'ouvre comme pour le code 601.

**Que faire :**

1. Patientez 10 secondes.
2. Si cela persiste, coupez puis rétablissez l'alimentation de la passerelle.
