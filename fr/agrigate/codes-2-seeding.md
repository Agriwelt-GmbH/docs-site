---
title: 2xx · Alarmes de semis
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-2-seeding.html
---

# 2xx · Alarmes de semis

Codes 201–207 : le capteur fonctionne, mais le rang sème trop peu, trop, avec des doubles ou des manques, dans le jalonnage, ou sans surveillance.

Les codes 2xx signifient que le capteur du rang fonctionne et que c'est le semis lui-même qui ne va pas : la cause est sur le semoir, pas dans l'électronique. L'emplacement est le rang.

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 201 · Rang sous la dose admise {#c201}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Under allowable rate »** (sous la dose admise) et les numéros de rang. La barre du rang est jaune : sous la ligne de contrôle (Flow) ou sous la plage de tolérance (Hybrid, Precision).

**Que faire :**

1. Contrôlez le doseur et le tube de descente de ce rang.
2. Vérifiez qu'il y a des graines au-dessus du doseur.

## 202 · Rang qui ne sème pas {#c202}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Under allowable rate »** et les numéros de rang — les mêmes mots que le code 201. La colonne du rang clignote en rouge foncé ; le menu du rang indique **« Not seeding »** (ne sème pas). Le capteur répond, aucune graine ne passe devant lui, alors que la plupart des rangs sèment.

**Que faire :**

1. Arrêtez-vous : le rang ne sème pas.
2. Contrôlez le doseur, son entraînement et le tube de descente de ce rang.
3. Vérifiez qu'il y a des graines dans la trémie.

## 203 · Rang au-dessus de la dose admise {#c203}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Rate too high »** (dose trop élevée) et les numéros de rang. La barre du rang est bleue. Uniquement dans les modes Hybrid et Precision.

**Que faire :**

1. Contrôlez le réglage du doseur de ce rang.

## 204 · Trop de doubles {#c204}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Too many doubles »** (trop de doubles) et les numéros de rang. Uniquement en mode Precision, et seulement quand **« Doubles alarm level »** (seuil d'alarme des doubles) n'est pas réglé sur **« No »** (non).

**Que faire :**

1. Contrôlez le disque de semis, l'éliminateur de doubles et le vide de ce rang.

## 205 · Trop de manques {#c205}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Too many skips »** (trop de manques) et les numéros de rang. Uniquement en mode Precision, et seulement quand **« Skips alarm level »** (seuil d'alarme des manques) n'est pas réglé sur **« No »**.

**Que faire :**

1. Contrôlez le disque de semis et le vide de ce rang.
2. Contrôlez la vitesse d'avancement : roulez plus lentement si elle est trop élevée pour le disque.

## 206 · Semis dans le jalonnage {#c206}

**Classe :** [Alarme](codes.md#class-alarm) · **Emplacement :** le rang.

**Ce que vous voyez.** La fenêtre d'alarme avec **« Seeding in tramline »** (semis dans le jalonnage) et les numéros de rang. La colonne du rang est hachurée en gris (jalonnage) et les graines au-dessus sont hachurées en rouge.

**Que faire :**

1. Contrôlez l'obturateur ou l'embrayage de jalonnage de ce rang.
2. Si le rang doit semer, contrôlez le rythme de jalonnage et les réglages de l'actionneur : [Jalonnage](tramline.md).

## 207 · Semis sans surveillance {#c207}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** le rang.

**Ce que vous voyez.** Pas de fenêtre. La pastille jaune **« NOT UNDER CONTROL »** (hors surveillance) avec les rangs de la bande clignote au-dessus de la bande, et l'avertisseur sonore retentit. Les graines s'écoulent dans la bande, mais moins de ses rangs sèment dans la norme que ne l'exige **« Share of seeding rows »** (proportion de rangs semant) — par exemple quand la ligne de contrôle ou la dose est très éloignée de ce que les rangs sèment réellement.

**Que faire :**

1. Comparez la ligne de contrôle ou la dose avec ce que les rangs sèment réellement.
2. Contrôlez les rangs jaunes ou rouge foncé : [Couleurs des barres](bar-colours.md).
