---
title: 8xx · Mise à jour de la passerelle
product: Agrigate
language: fr
firmware: 
url: https://docs.agriwelt.com/fr/agrigate/codes-8-gateway-update.html
---

# 8xx · Mise à jour de la passerelle

Codes 801–810 : les étapes et les résultats de la mise à jour du micrologiciel de la passerelle depuis l'app.

Les codes 8xx concernent la mise à jour du micrologiciel de la passerelle depuis l'app. L'écran de mise à jour affiche le code devant le résultat, par exemple *804 · Bridge updated*. Comment lancer la mise à jour : [Mettre à jour la passerelle](bridge-update.md).

Comment lire un code, les quatre classes et l'aspect de chacune dans l'app : [Comment fonctionnent les codes de service](codes.md).

## 801 · Transfert de la mise à jour commencé {#c801}

**Classe :** [Enregistrement](codes.md#class-record) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour, c'est le début de l'étape **« Firmware transfer »** (transfert du micrologiciel) ; aucun code n'est affiché. La passerelle le conserve comme enregistrement.

**Que faire.** Rien. Ce code est un enregistrement pour le service.

## 802 · Mise à jour transférée en entier {#c802}

**Classe :** [Enregistrement](codes.md#class-record) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour, c'est la fin de l'étape **« Firmware transfer »**, après quoi l'écran passe à **« Bridge restart »** (redémarrage de la passerelle) ; aucun code n'est affiché. La passerelle le conserve comme enregistrement. L'image est transférée et acceptée ; sa signature est vérifiée plus tard, quand la passerelle bascule dessus, et un refus arrive alors sous la forme du [806](codes-8-gateway-update.md#c806).

**Que faire.** Rien. Ce code est un enregistrement pour le service.

## 803 · Mise à jour activée {#c803}

**Classe :** [Enregistrement](codes.md#class-record) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour, c'est l'étape **« Bridge restart »** ; aucun code n'est affiché. La passerelle conserve l'enregistrement de son redémarrage sur le nouveau micrologiciel.

**Que faire :**

1. Attendez jusqu'à une minute et n'éteignez pas la passerelle.

## 804 · Passerelle mise à jour {#c804}

**Classe :** [Enregistrement](codes.md#class-record) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 804 · Bridge updated »** (passerelle mise à jour) et **« The new firmware passed its check and runs. The monitor works as before. »** (le nouveau micrologiciel a passé son contrôle et fonctionne ; le moniteur fonctionne comme avant).

**Que faire.** Rien. Ce code est un enregistrement pour le service.

## 805 · La passerelle est revenue au micrologiciel précédent {#c805}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 805 · The bridge went back to its previous firmware »** (la passerelle est revenue à son micrologiciel précédent). Le nouveau micrologiciel a échoué à son propre contrôle ; la passerelle exécute le précédent et fonctionne.

**Que faire :**

1. Continuez à travailler.
2. Communiquez le code au service.

## 806 · Micrologiciel refusé : signature {#c806}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 806 · The bridge refused the firmware: the signature does not match »** (la passerelle a refusé le micrologiciel : la signature ne correspond pas). La passerelle garde son micrologiciel.

**Que faire :**

1. Mettez l'app Hectare à jour et réessayez.
2. Si cela se répète, communiquez le code au service.

## 807 · Micrologiciel refusé : pas plus récent {#c807}

**Classe :** [Enregistrement](codes.md#class-record) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 807 · The bridge refused the firmware: it is not newer »** (la passerelle a refusé le micrologiciel : il n'est pas plus récent) et **« The bridge runs its own firmware. Nothing to do. »** (la passerelle exécute son propre micrologiciel ; rien à faire).

**Que faire.** Rien. Ce code est un enregistrement pour le service.

## 808 · Transfert de la mise à jour interrompu {#c808}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 808 · Firmware transfer interrupted »** (transfert du micrologiciel interrompu). La passerelle exécute son micrologiciel précédent.

**Que faire :**

1. Gardez la tablette près de la passerelle.
2. Relancez la mise à jour ; le transfert repart du début.

## 809 · Mise à jour impossible maintenant {#c809}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 809 · The bridge is busy: no update now »** (la passerelle est occupée : pas de mise à jour maintenant), ou **« 809 · The machine is seeding: the update did not start »** (la machine sème : la mise à jour n'a pas démarré). Rien n'a été envoyé.

**Que faire :**

1. Terminez le semis et arrêtez la machine.
2. Effacez l'alarme active sur le semoir.
3. Attendez une minute et réessayez.

## 810 · La passerelle n'est pas revenue après le redémarrage {#c810}

**Classe :** [Attention](codes.md#class-attention) · **Emplacement :** aucun en particulier.

**Ce que vous voyez.** Sur l'écran de mise à jour : **« 810 · The bridge did not come back after the restart »** (la passerelle n'est pas revenue après le redémarrage). L'app a attendu la passerelle pendant 2 minutes après son redémarrage.

**Que faire :**

1. Contrôlez l'alimentation de la passerelle et attendez une minute.
2. Si elle n'est toujours pas revenue, coupez puis rétablissez son alimentation et rouvrez l'écran de mise à jour.
