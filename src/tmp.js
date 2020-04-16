/* eslint-disable */
// Original file
// <nowiki>
;
(function($, mw, rs) {
    var self = {
        data: window.rsPerks,
        currentDraggedEle: '',
        submitBtn: null,
        slotClass: 'perkCalcSlot',
        ancientGizmoImgClass: 'perkcalc-ancient-gizmo',
        comps: [{
                name: "Base parts",
                cat: 0
            },
            {
                name: "Blade parts",
                cat: 0
            },
            {
                name: "Clear parts",
                cat: 0
            },
            {
                name: "Connector parts",
                cat: 0
            },
            {
                name: "Cover parts",
                cat: 0
            },
            {
                name: "Crafted parts",
                cat: 0
            },
            {
                name: "Crystal parts",
                cat: 0
            },
            {
                name: "Deflecting parts",
                cat: 0
            },
            {
                name: "Delicate parts",
                cat: 0
            },
            {
                name: "Flexible parts",
                cat: 0
            },
            {
                name: "Head parts",
                cat: 0
            },
            {
                name: "Magic parts",
                cat: 0
            },
            {
                name: "Metallic parts",
                cat: 0
            },
            {
                name: "Organic parts",
                cat: 0
            },
            {
                name: "Padded parts",
                cat: 0
            },
            {
                name: "Plated parts",
                cat: 0
            },
            {
                name: "Simple parts",
                cat: 0
            },
            {
                name: "Smooth parts",
                cat: 0
            },
            {
                name: "Spiked parts",
                cat: 0
            },
            {
                name: "Spiritual parts",
                cat: 0
            },
            {
                name: "Stave parts",
                cat: 0
            },
            {
                name: "Tensile parts",
                cat: 0
            },

            {
                name: "Dextrous components",
                cat: 1
            },
            {
                name: "Direct components",
                cat: 1
            },
            {
                name: "Enhancing components",
                cat: 1
            },
            {
                name: "Ethereal components",
                cat: 1
            },
            {
                name: "Evasive components",
                cat: 1
            },
            {
                name: "Healthy components",
                cat: 1
            },
            {
                name: "Heavy components",
                cat: 1
            },
            {
                name: "Imbued components",
                cat: 1
            },
            {
                name: "Light components",
                cat: 1
            },
            {
                name: "Living components",
                cat: 1
            },
            {
                name: "Pious components",
                cat: 1
            },
            {
                name: "Powerful components",
                cat: 1
            },
            {
                name: "Precious components",
                cat: 1
            },
            {
                name: "Precise components",
                cat: 1
            },
            {
                name: "Protective components",
                cat: 1
            },
            {
                name: "Refined components",
                cat: 1
            },
            {
                name: "Sharp components",
                cat: 1
            },
            {
                name: "Strong components",
                cat: 1
            },
            {
                name: "Stunning components",
                cat: 1
            },
            {
                name: "Subtle components",
                cat: 1
            },
            {
                name: "Swift components",
                cat: 1
            },
            {
                name: "Variable components",
                cat: 1
            },
            {
                name: "Third-age components",
                cat: 2
            },
            {
                name: "Armadyl components",
                cat: 2
            },
            {
                name: "Ascended components",
                cat: 2
            },
            {
                name: "Avernic components",
                cat: 2
            },
            {
                name: "Bandos components",
                cat: 2
            },
            {
                name: "Brassican components",
                cat: 2
            },
            {
                name: "Clockwork components",
                cat: 2
            },
            {
                name: "Corporeal components",
                cat: 2
            },
            {
                name: "Culinary components",
                cat: 2
            },
            {
                name: "Cywir components",
                cat: 2
            },
            {
                name: "Dragonfire components",
                cat: 2
            },
            {
                name: "Explosive components",
                cat: 2
            },
            {
                name: "Faceted components",
                cat: 2
            },
            {
                name: "Fortunate components",
                cat: 2
            },
            {
                name: "Fungal components",
                cat: 2
            },
            {
                name: "Harnessed components",
                cat: 2
            },
            {
                name: "Ilujankan components",
                cat: 2
            },
            {
                name: "Knightly components",
                cat: 2
            },
            {
                name: "Noxious components",
                cat: 2
            },
            {
                name: "Oceanic components",
                cat: 2
            },
            {
                name: "Pestiferous components",
                cat: 2
            },
            {
                name: "Resilient components",
                cat: 2
            },
            {
                name: "Rumbling components",
                cat: 2
            },
            {
                name: "Saradomin components",
                cat: 2
            },
            {
                name: "Seren components",
                cat: 2
            },
            {
                name: "Shadow components",
                cat: 2
            },
            {
                name: "Shifting components",
                cat: 2
            },
            {
                name: "Silent components",
                cat: 2
            },
            {
                name: "Undead components",
                cat: 2
            },
            {
                name: "Zamorak components",
                cat: 2
            },
            {
                name: "Zaros components",
                cat: 2
            },
            {
                name: "Classic components",
                cat: 2,
                ancient: true
            },
            {
                name: "Historic components",
                cat: 2,
                ancient: true
            },
            {
                name: "Timeworn components",
                cat: 2,
                ancient: true
            },
            {
                name: "Vintage components",
                cat: 2,
                ancient: true
            },
        ],

        /**
         * helper filepath function
         */
        filepath: function(f) {
            return rs.getFileURL(f);
        },

        extremeInventionPotion: function(level) {
            var potdata = [25, 30, 33, 36, 38, 40, 42, 43, 44, 45, 47, 48, 49, 49, 50, 51, 52, 10000000];
            for (var i = 0; i < potdata.length; i++) {
                if (level < potdata[i]) {
                    return i;
                }
            }
        },

        startCompDrag: function(e) {
            self.currentDraggedEle = e.currentTarget;
            // we're not using the following line but FF seems to require it
            // to recognise we're doing a drag?
            e.originalEvent.dataTransfer.setData('text', 'shrug');
        },

        compDragOver: function(e) {
            e.preventDefault();
        },

        endCompDrag: function(e) {
            e.preventDefault();
            var draggedEle = $(self.currentDraggedEle),
                targetEle = $(e.target),
                dataCompTarget = 'alt';

            console.log('dragged', draggedEle)
            console.log('target', targetEle)

            self.currentDraggedEle = ''

            if (targetEle.hasClass('perkCalcSlotImg')) {
                // this isn't what we want, get the parent instead
                targetEle = targetEle.parent()
            }

            if (draggedEle.hasClass('perkCalcCompImg')) {
                // Set data-comp attr and img on slot to the clicked component
                targetEle.attr('data-comp', draggedEle.attr('alt'));
            } else {
                if (draggedEle.hasClass('perkCalcSlotImg')) {
                    // Dragged element was an existing slot image div, get parent instead
                    draggedEle = draggedEle.parent()
                }
                if (draggedEle.hasClass('perkCalcSlot')) {
                    var teAttr = targetEle.attr('data-comp'),
                        drAttr = draggedEle.attr('data-comp')
                    // Dragged element was an existing slot
                    targetEle.attr('data-comp', drAttr)
                    draggedEle.attr('data-comp', teAttr)
                }
            }
        },

        /**
         * Initialises the script, creating buttons etc
         **/
        init: function() {
            // cat: 0=common,1=uncommon,2=rare
            // can use 'img' field to override image URL
            var calc = $('#perkCalc'),
                slotTop = $('<div class="' + self.slotClass + '" id="perkCalcSlotTop" data-pos="top" data-comp="" draggable="true">'),
                slotLeft = $('<div class="' + self.slotClass + '" id="perkCalcSlotLeft" data-pos="left" data-comp="" draggable="true">'),
                slotMiddle = $('<div class="' + self.slotClass + '" id="perkCalcSlotMiddle" data-pos="middle" data-comp="" draggable="true">'),
                slotRight = $('<div class="' + self.slotClass + '" id="perkCalcSlotRight" data-pos="right" data-comp="" draggable="true">'),
                slotBottom = $('<div class="' + self.slotClass + '" id="perkCalcSlotBottom" data-pos="bottom" data-comp="" draggable="true">'),
                ancientSlot1 = $('<div class="' + self.slotClass + '" id="perkCalcSlotAncientTL" data-pos="top-left" data-comp="" draggable="true">'),
                ancientSlot2 = $('<div class="' + self.slotClass + '" id="perkCalcSlotAncientTR" data-pos="top-right" data-comp="" draggable="true">'),
                ancientSlot3 = $('<div class="' + self.slotClass + '" id="perkCalcSlotAncientBL" data-pos="bottom-left" data-comp="" draggable="true">'),
                ancientSlot4 = $('<div class="' + self.slotClass + '" id="perkCalcSlotAncientBR" data-pos="bottom-right" data-comp="" draggable="true">'),
                //ancientWarning = $('<h3>').text('Warning: Our data for ancient gizmos is incomplete and may be inaccurate, unconfirmed, or completely wrong. Use with caution.'),
                compSelect = $('<div id="perkCalcCompSelect" class="tile">'),
                commonEle = $('<div id="compsCommon">').append($('<h5>Common materials</h5>')),
                uncommonEle = $('<div id="compsUncommon">').append($('<h5>Uncommon materials</h5>')),
                rareEle = $('<div id="compsRare">').append($('<h5>Rare materials</h5>'));

            // Add image and slots to div
            calc.append(
                $('<div id="perkCalcMain">')
                .append(
                    $('<div id="perkCalcImg">')
                    .append(
                        $('<div id="perkCalcBg">'),
                        slotTop, slotLeft, slotMiddle, slotRight, slotBottom, ancientSlot1, ancientSlot2, ancientSlot3, ancientSlot4
                    ),
                    compSelect
                )
            );

            // Ancient gizmo
            var ancientGizmo = new OO.ui.CheckboxInputWidget({
                selected: false,
                value: 1
            })

            $(ancientSlot1).hide();
            $(ancientSlot2).hide();
            $(ancientSlot3).hide();
            $(ancientSlot4).hide();
            //$(ancientWarning).hide();

            ancientGizmo.on('change', function(selected, indeterminate) {
                // TODO: make this code less shitty
                self.refreshCompsList(selected);
                if (selected) {
                    $(ancientSlot1).show();
                    $(ancientSlot2).show();
                    $(ancientSlot3).show();
                    $(ancientSlot4).show();
                    $('#perkCalcBg').addClass('isAncient');
                    //$(ancientWarning).show();
                } else {
                    $(ancientSlot1).hide();
                    $(ancientSlot2).hide();
                    $(ancientSlot3).hide();
                    $(ancientSlot4).hide();
                    $('#perkCalcBg').removeClass('isAncient');
                    //$(ancientWarning).hide();
                }
            });

            // Add drag events to all slots
            $('.' + self.slotClass).on('drop', self.endCompDrag);
            $('.' + self.slotClass).on('dragover', self.compDragOver);
            $('.' + self.slotClass).on('dragstart', self.startCompDrag);

            for (i = 0; i < self.comps.length; i++) {
                var currComp = self.comps[i]

                var currCompEle = $('<div>', {
                    'class': 'perkCalcCompImg',
                    'data-comp': currComp.name,
                    alt: currComp.name,
                    draggable: true
                });

                // Add tooltips
                new window.Tooltip(currCompEle, {
                    placement: 'top', // or bottom, left, right, and variations
                    title: currComp.name
                });

                // Events
                currCompEle.on('dragstart', self.startCompDrag); // drag & drop func
                currCompEle.click(function() {
                    var thisEle = $(this)
                    // loop through slots in in-game order and add comp to first empty one
                    var slots = [slotMiddle, slotTop, slotLeft, slotRight, slotBottom];
                    if (ancientGizmo.isSelected()) {
                        Array.prototype.push.apply(slots, [ancientSlot1, ancientSlot2, ancientSlot3, ancientSlot4]);
                    }
                    $.each(slots, function(index, value) {
                        if (value.attr('data-comp')) {
                            // not an empty slot, don't care
                            return true // effectively a continue
                        }
                        value.attr('data-comp', thisEle.attr('data-comp'));
                        value.find('.perkCalcSlotImg').attr('src', thisEle.attr('src'));
                        return false;
                    });
                });

                switch (currComp.cat) {
                    case 0:
                        commonEle.append(currCompEle);
                        break
                    case 1:
                        uncommonEle.append(currCompEle);
                        break
                    case 2:
                        rareEle.append(currCompEle);
                        break
                };
            };

            compSelect.append(commonEle, uncommonEle, rareEle)

            var invLevelInput = new OO.ui.NumberInputWidget({
                input: {
                    value: 120
                },
                min: 0,
                max: 137
            });

            var gizmoOption1 = new OO.ui.ButtonOptionWidget({
                    data: 'Weapon',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcShell" data-shell="weapon"/> Weapon')
                }),
                gizmoOption2 = new OO.ui.ButtonOptionWidget({
                    data: 'Armour',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcShell" data-shell="armour"/> Armour')
                }),
                gizmoOption3 = new OO.ui.ButtonOptionWidget({
                    data: 'Tool',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcShell" data-shell="tool"/> Tool')
                }),
                gizmoSelect = new OO.ui.ButtonSelectWidget({
                    items: [gizmoOption1, gizmoOption2, gizmoOption3]
                });

            gizmoSelect.on('choose', function(item, selected) {
                $('#' + self.ancientGizmoImgClass).attr("src", rs.getFileURL('Ancient ' + item.getData().toLowerCase() + ' gizmo.png'))
            });
            //gizmoSelect.selectItemByData('Weapon') // select no gizmo by default

            var potionOption1 = new OO.ui.ButtonOptionWidget({
                    data: 'None',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcPotion" data-potion="none"/> None')
                }),
                potionOption2 = new OO.ui.ButtonOptionWidget({
                    data: 'Normal',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcPotion" data-potion="normal"/> Normal')
                }),
                potionOption3 = new OO.ui.ButtonOptionWidget({
                    data: 'Super',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcPotion" data-potion="super"/> Super')
                }),
                potionOption4 = new OO.ui.ButtonOptionWidget({
                    data: 'Extreme',
                    label: new OO.ui.HtmlSnippet('<div class="perkCalcPotion" data-potion="extreme"/> Extreme')
                }),
                potionSelect = new OO.ui.ButtonSelectWidget({
                    items: [potionOption1, potionOption2, potionOption3, potionOption4]
                });
            potionSelect.selectItemByData('None') // select no potion 

            var showProbType = new OO.ui.CheckboxInputWidget({
                selected: false,
                value: 1
            })

            self.submitBtn = new OO.ui.ButtonWidget({
                label: 'Submit'
            });
            self.submitBtn.$element.click(function() {
                // console.log('tick',Date.now())
                if (invLevelInput.getNumericValue() > 137) {
                    // do nothing, the inv level box will already have a red border
                    // and we shouldn't be continuing with a high inv level
                    // as it can lag out browsers
                    return
                }
                if (gizmoSelect.findSelectedItem() === null) {
                    self.dispResult({
                        err: "Please select a gizmo"
                    }, {});
                    return
                }
                self.submitBtn.setDisabled(true);
                try {
                    var info = {
                        level: invLevelInput.getNumericValue(),
                        gizmo: gizmoSelect.findSelectedItem().getData().toLowerCase(),
                        materials: [
                            $(slotMiddle).attr('data-comp'),
                            $(slotTop).attr('data-comp'),
                            $(slotLeft).attr('data-comp'),
                            $(slotRight).attr('data-comp'),
                            $(slotBottom).attr('data-comp')
                        ],
                        ancient: ancientGizmo.isSelected(),
                        potion: potionSelect.findSelectedItem().getData().toLowerCase(),
                        shownoeffect: showProbType.isSelected()
                    };

                    if (info.ancient) {
                        Array.prototype.push.apply(info.materials, [
                            $(ancientSlot1).attr('data-comp'),
                            $(ancientSlot2).attr('data-comp'),
                            $(ancientSlot3).attr('data-comp'),
                            $(ancientSlot4).attr('data-comp')
                        ]);
                    }

                    switch (info.potion) {
                        case 'normal':
                            info.levelwithpotion = info.level + 3;
                            break;
                        case 'super':
                            info.levelwithpotion = info.level + 5;
                            break;
                        case 'extreme':
                            info.levelwithpotion = info.level + self.extremeInventionPotion(info.level);
                            break;
                        default:
                            info.levelwithpotion = info.level;
                    }

                    var result = self.getMaterialsProb(info.levelwithpotion, info.gizmo, info.materials, info.ancient)
                    self.dispResult(result, info)
                } catch (err) {
                    $('#bodyContent, #WikiaArticle')
                        .find('#perkCalcResult')
                        .addClass('jcError')
                        .text('There was a problem with the calculator. If this persists, please contact an admin.');
                    console.error(err)
                }
                self.submitBtn.setDisabled(false);
                // console.log('tock',Date.now())
            });

            var resetBtn = new OO.ui.ButtonWidget({
                label: 'Reset slots',
                flags: 'destructive'
            });
            resetBtn.$element.click(function() {
                var slots = $('.' + self.slotClass);
                slots.each(function() {
                    $(this).attr('data-comp', '');
                });
            });

            var permalinkBtn = new OO.ui.ButtonWidget({
                label: 'Copy link to this setup'
            });
            permalinkBtn.$element.click(function() {
                var qs = {},
                    slots = $('.' + self.slotClass),
                    ancient = ancientGizmo.isSelected(),
                    invLevel = invLevelInput.getNumericValue(),
                    gizmoType,
                    potionType

                if (gizmoSelect.findSelectedItem() !== null) {
                    gizmoType = gizmoSelect.findSelectedItem().getData()
                }

                if (potionSelect.findSelectedItem() !== null) {
                    potionType = potionSelect.findSelectedItem().getData()
                }

                slots.each(function() {
                    var dataComp = $(this).attr('data-comp'),
                        dataPos = $(this).attr('data-pos')
                    if (dataComp) {
                        qs[dataPos] = dataComp
                    }
                });
                if (ancient) {
                    qs['ancient'] = ancient
                }
                if (invLevel) {
                    qs['lvl'] = invLevel
                }
                if (gizmoType) {
                    qs['type'] = gizmoType
                }
                if (potionType) {
                    qs['potion'] = potionType
                }

                var uri = new mw.Uri()
                uri.query = qs
                var txt = document.createElement('textarea'),
                    $txt = $(txt);
                $txt.text(uri.toString()).css({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '2em',
                    heigh: '2em',
                    padding: 0,
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    background: 'transparent'
                }).appendTo('body');
                txt.select();
                try {
                    document.execCommand('copy');
                    mw.notify('Copied permalink to the clipboard', {
                        tag: 'perkCalcCopyLink'
                    });
                } catch (err) {}
                $txt.remove();
            })

            fieldset = new OO.ui.FieldsetLayout({
                classes: ['perkCalcFieldset']
            });

            fieldset.addItems([
                new OO.ui.FieldLayout(invLevelInput, {
                    label: 'Invention level',
                    align: 'right',
                    help: 'This is your base Invention level, without boosts.'
                }),
                new OO.ui.FieldLayout(gizmoSelect, {
                    label: 'Gizmo shell type',
                    align: 'right'
                }),
                new OO.ui.FieldLayout(ancientGizmo, {
                    label: new OO.ui.HtmlSnippet('<img id="perkcalc-ancient-gizmo" src="' + rs.getFileURL('Ancient weapon gizmo.png') + '"> Ancient gizmo'),
                    align: 'right',
                    help: 'If you are using an ancient gizmo, tick this. Ancient invention is unlocked at level 70 Archaeology.'
                }),
                new OO.ui.FieldLayout(potionSelect, {
                    label: 'Invention potion',
                    align: 'right'
                }),
                new OO.ui.FieldLayout(showProbType, {
                    label: 'Show no effect',
                    align: 'right',
                    help: 'When unselected, only show the per-gizmo-consumed probabilities. When selected, also shows the per-make-gizmo-attempt probabilities. (When you get no effect, the gizmo is not consumed.)'
                })
            ]);

            calc.append(fieldset.$element, self.submitBtn.$element, resetBtn.$element, permalinkBtn.$element, $('<div id="perkCalcResult" class="tile">').text('The result will appear here.'));

            function slotClickHandler(e) {
                var slotComp = $(e.currentTarget);
                slotComp.attr('data-comp', '');
            }

            // Add placeholder img and onClick handler to all slots
            var slots = $('.' + self.slotClass);
            slots.each(function() {
                $(this).append($('<div>', {
                    'class': 'perkCalcSlotImg'
                }))
                $(this).click(slotClickHandler);
            });

            /**
             * Handle qsp
             **/
            try {
                var uri = new mw.Uri()
                if (Object.keys(uri.query).length > 0) {
                    // we're already using jquery so fuck it
                    $.each(uri.query, function(key, value) {
                        var slots = $('.' + self.slotClass);
                        slots.each(function() {
                            var $slot = $(this)
                            if ($slot.attr('data-pos') === key) {
                                for (var i = 0; i < self.comps.length; i++) {
                                    // TODO: change self.comps so that this loop isn't necessary
                                    var comp = self.comps[i]
                                    if (comp.name === value) {
                                        if (!comp.img) {
                                            comp.img = rs.getFileURL(comp.name + '.png');
                                        };
                                        $slot.attr('data-comp', comp.name);
                                        $slot.find('.perkCalcSlotImg').attr('src', comp.img);
                                    }
                                }
                            }
                        });

                        switch (key) {
                            case 'ancient':
                                ancientGizmo.setSelected(true)
                                break
                            case 'lvl':
                                invLevelInput.setValue(parseInt(value))
                                break
                            case 'potion':
                                potionSelect.selectItemByData(value)
                                break
                            case 'type':
                                gizmoSelect.selectItemByData(value)
                                break
                            default:
                                break
                        }
                    })
                    self.submitBtn.$element.click(); // simulate a click on the submit button
                }
            } catch (err) {
                console.error(err)
                mw.notify('Error loading linked settings', {
                    tag: 'perkCalcCopyLink'
                });
            }

            self.refreshCompsList(ancientGizmo.isSelected());
        },

        refreshCompsList: function(ancientSelected) {
            for (i = 0; i < self.comps.length; i++) {
                var currComp = self.comps[i],
                    slots = $('.' + self.slotClass);

                if (currComp.ancient && currComp.ancient === true && ancientSelected === false) {
                    // if the component is from ancient invention but we're not using an ancient gizmo...
                    // hide it from the list
                    $('.perkCalcCompImg[data-comp="' + currComp.name + '"]').hide()
                    slots.each(function() {
                        if ($(this).attr('data-comp') === currComp.name) {
                            $(this).attr('data-comp', '')
                        }
                    });
                } else {
                    $('.perkCalcCompImg[data-comp="' + currComp.name + '"]').show()
                }
            }
        },

        /**
         * helper, makes image cell
         */
        makeImg: function(p) {
            var ps = p.match(/^([\-A-Za-z' ]*?)(?: (\d))?(?:,([\-A-Za-z' ]*?)(?: (\d))?)?$/);
            var ret = $('<td class="perk-background">');
            for (var i = 1; i < 4; i += 2) {
                if (ps[i] === undefined) {
                    continue
                }
                var _ps = self.data.perks[ps[i]];
                if (_ps === undefined) {
                    continue
                }
                var img = $('<span class="perkCalcPerk">')
                img.append($('<span class="perkCalcPerkImg">').attr({
                    'data-perk': ps[i]
                }));
                if (ps[i + 1] !== undefined) {
                    img.append($('<span class="perkCalcRank">').addClass('data-rank-' + ps[i + 1]));
                }

                ret.append(img);
            }
            return ret;
        },

        makeLink: function(p) {
            var ps = p.match(/^([\-A-Za-z' ]*?)(?: (\d))?(?:,([\-A-Za-z' ]*?)(?: (\d))?)?$/);
            var ret = $('<td>');
            for (var i = 1; i < 4; i += 2) {
                if (ps[i] === undefined) {
                    continue
                }
                var _ps = self.data.perks[ps[i]];
                if (_ps === undefined) {
                    continue
                }
                var link = $('<a>').text(ps[i] + (ps[i + 1] === undefined ? '' : (' ' + ps[i + 1])));
                if (_ps.hasOwnProperty('link')) {
                    link.attr('href', '/w/' + _ps.link);
                } else {
                    link.attr('href', '/w/' + ps[i]);
                }
                if (i > 1) {
                    ret.append(', ');
                }
                ret.append(link);
            }
            return ret;
        },
        /**
         * helper, rounds to 4 sig figs
         */
        round4SF: function(x) {
            var f = 4;
            if (x === 0) return 0;
            var m = Math.floor(Math.log10(x));
            var v = x / Math.pow(10, (m - f));
            v = Math.floor(v + 0.5) * Math.pow(10, (m - f));
            return v;
        },
        handlePercent: function(x) {
            var xpc = 100 * x;
            return Number(xpc).toPrecision(4) + '%';
        },
        handleOneOver: function(x) {
            if (x == 0) {
                return '-';
            }
            var oneoverx = 1 / x;
            var mult = 1;
            if (oneoverx < 10) {
                mult = 100;
            } else if (oneoverx < 100) {
                mult = 10;
            }
            oneoverx *= mult;
            oneoverx = Math.floor(oneoverx);
            oneoverx = oneoverx / mult;
            return '1/' + oneoverx;
        },

        /**
         * Displays the result of the getMaterialsProb call
         **/
        dispResult: function(result, info) {
            // $('#' + self.form + ' .jcSubmit')
            // 	.data('oouiButton')
            //     .setDisabled(false);

            var res;
            if (result.err !== undefined) {
                res = result.err;
                $('#bodyContent, #WikiaArticle')
                    .find('#perkCalcResult')
                    .empty()
                    .addClass('jcError')
                    .append(res);
                return
            } else {
                res = $('<table class="wikitable sortable align-right-3 align-right-4 align-right-5 align-right-6">');
                var tbody = $('<tbody>');
                res.append(tbody);
                var sumrow = $('<tr class="perkCalcSumRow">').append(
                    $('<td class="perk-background">'),
                    $('<td>').append('<b>Sum of selection</b>')
                );
                if (info.shownoeffect) {
                    sumrow.append(
                        $('<td class="sumRowClickPC">').text('-').attr('data-sort-value', 0),
                        $('<td class="sumRowClick1O">').text('-').attr('data-sort-value', 0)
                    );
                }
                sumrow.append(
                    $('<td class="sumRowGizmoPC">').text('-').attr('data-sort-value', 0),
                    $('<td class="sumRowGizmo1O">').text('-').attr('data-sort-value', 0)
                );
                tbody.append(sumrow);
                var rawnoresult = 0,
                    noresult = 0,
                    noresult1over = '-';
                var resultsarray = [];
                for (var p in result) {
                    if (result.hasOwnProperty(p)) {
                        if (p === '') {
                            rawnoresult = result[p];
                            noresult = self.handlePercent(result[p]);
                            noresult1over = self.handleOneOver(result[p]);
                        } else {
                            resultsarray.push({
                                'perk': p,
                                'rawprob': result[p],
                                'prob': self.handlePercent(result[p]),
                                'oneover': self.handleOneOver(result[p])
                            });
                        }
                    }
                }
                resultsarray.sort(function(a, b) {
                    return b.rawprob - a.rawprob
                })

                var totaleffperc = 1 - rawnoresult;
                var showeffperc = rawnoresult > 0;
                var $tr = $('<tr>').append(
                    $('<th class="unsortable">').text(''),
                    $('<th>').text('Perk combination')
                );
                if (info.shownoeffect) {
                    $tr.append(
                        $('<th>').text('Prob. per attempt (%)'),
                        $('<th>').text('Prob. per attempt (~1/x)')
                    );
                }
                $tr.append(
                    $('<th>').text('Prob. per gizmo (%)'),
                    $('<th>').text('Prob. per gizmo (~1/x)')
                );

                res.append($('<thead>').append($tr));

                if (info.shownoeffect) {
                    $tr = $('<tr class="perkCalcNoEffectRow">').append(
                        $('<td class="perk-background">').text(''),
                        $('<td>').text('No effect'),
                        $('<td>').text(noresult).attr('data-sort-value', rawnoresult),
                        $('<td>').text(noresult1over).attr('data-sort-value', rawnoresult),
                        $('<td>').text('-').attr('data-sort-value', 0),
                        $('<td>').text('-').attr('data-sort-value', 0)
                    );
                    tbody.append($tr);
                }


                for (var i = 0; i < resultsarray.length; i++) {
                    var p = resultsarray[i];
                    $tr = $('<tr>').append(
                        self.makeImg(p['perk']),
                        self.makeLink(p['perk'])
                    );
                    if (info.shownoeffect) {
                        $tr.append(
                            $('<td>').text(p['prob']).attr('data-sort-value', p['rawprob']),
                            $('<td>').text(p['oneover']).attr('data-sort-value', p['rawprob'])
                        );
                    }
                    $tr.append(
                        $('<td>').text(self.handlePercent(p['rawprob'] / totaleffperc)).attr('data-sort-value', p['rawprob']),
                        $('<td>').text(self.handleOneOver(p['rawprob'] / totaleffperc)).attr('data-sort-value', p['rawprob'])
                    );
                    $tr.attr({
                        'data-prob': p['rawprob'],
                        'data-prob-noNE': p['rawprob'] / totaleffperc
                    });
                    tbody.append($tr);
                }

                tbody.find('tr').mouseover(function() {
                    $(this).addClass('perkCalcSumTargetHover');
                }).mouseout(function() {
                    $(this).removeClass('perkCalcSumTargetHover');
                });

                tbody.find('tr').click(function() {
                    if ($(this).hasClass('perkCalcSumRow') || $(this).hasClass('perkCalcNoEffectRow')) {
                        return;
                    }
                    $(this).toggleClass('perkCalcSumTarget');

                    if (tbody.find('.perkCalcSumTarget').length == 0) {
                        sumrow.find('.sumRowClickPC').text('-').data('sortValue', 0);
                        sumrow.find('.sumRowClick10').text('-').data('sortValue', 0);
                        sumrow.find('.sumRowGizmoPC').text('-').data('sortValue', 0);
                        sumrow.find('.sumRowGizmo1O').text('-').data('sortValue', 0);
                    } else {
                        var prob = 0,
                            probNE = 0;
                        tbody.find('.perkCalcSumTarget').each(function(i, e) {
                            var p = parseFloat($(e).attr('data-prob')),
                                pne = parseFloat($(e).attr('data-prob-noNE'));
                            if (isNaN(p)) {
                                p = 0;
                            }
                            if (isNaN(pne)) {
                                pne = 0;
                            }
                            prob += p;
                            probNE += pne;
                        });
                        sumrow.find('.sumRowClickPC').text(self.handlePercent(prob)).data('sortValue', prob);
                        sumrow.find('.sumRowClick10').text(self.handleOneOver(prob)).data('sortValue', prob);
                        sumrow.find('.sumRowGizmoPC').text(self.handlePercent(probNE)).data('sortValue', probNE);
                        sumrow.find('.sumRowGizmo1O').text(self.handleOneOver(probNE)).data('sortValue', probNE);
                    }
                });
            }

            var mats = [];
            for (var imat = 0; imat < 9; imat++) {
                if (info.materials[imat] === undefined || info.materials[imat] === '') {
                    mats.push('empty');
                } else {
                    mats.push(info.materials[imat]);
                }
            }
            var extPotWarning = '';
            var potionNote = '';
            if (info.potion !== 'none') {
                potionNote = '(' + info.level + ' + ' + info.potion + ' potion) ';
                if (info.potion === 'extreme') {
                    if (info.level < 53) {
                        extPotWarning = $("<div>").html("Extreme invention potions have a non-standard boost which relies on your experience rather than level. <a href='/w/Extreme_invention_potion'>Check the page</a> for full details.");
                    } else if (info.level > 120) {
                        extPotWarning = $("<div>").text("No need to set both your level over 120 and a potion!");
                    }
                }
            }

            $('#bodyContent, #WikiaArticle')
                .find('#perkCalcResult')
                .empty()
                .removeClass('jcError')
                .append($("<div>").text("If you don't see your expected perks here, make sure your gizmo shell type is set to the correct one!"))
                .append($("<div>").text("Results for level " + info.levelwithpotion + " Invention " + potionNote + "in a" + (info.gizmo == 'armour' ? 'n ' : ' ') + info.gizmo + " gizmo with materials: " + mats.join(', ')))
                .append(extPotWarning)
                .append(res);

            // allow scripts to hook into form submission
            mw.hook('rsperkcalc.submit').fire();

            mw.loader.using('jquery.tablesorter', function() {
                $('table.sortable').tablesorter();
            });
            mw.loader.using('jquery.makeCollapsible', function() {
                $('.mw-collapsible').makeCollapsible();
            });
        },

        rollDice: function(dice, base) {
            var probabilities = [1.0]
            for (var i = 0; i < dice.length; i++) {
                var newSize = probabilities.length + dice[i] - 1
                var newArr = []
                for (var i2 = 0; i2 < newSize; i2++) {
                    newArr.push(0.0)
                }
                var total = 0
                for (var i3 = 0; i3 < newSize; i3++) {
                    if (i3 < probabilities.length) {
                        total += probabilities[i3]
                    }
                    if ((i3 - dice[i]) >= 0) {
                        total -= probabilities[i3 - dice[i]]
                    }
                    newArr[i3] = (total * 1.0) / dice[i]
                }
                probabilities = newArr
            }
            var baseProbs = []
            for (var i4 = 0; i4 < base; i4++) {
                baseProbs.push(0.0)
            }
            return baseProbs.concat(probabilities)
        },

        /**
         * Roughly equivalent to Jagex's internal array sort algorithm
         * which is really god damn weird because it's like quicksort but not.
         * Sorts in place.
         * 
         * Example usage:
         *     var perkArr = [
         *       {'perk': 'Cautious', 'cost': 0, 'probability': 0.0019369834710743802, 'rank': 0},
         *       {'perk': 'Blunted', 'cost': 0, 'probability': 0.00021947873799725651, 'rank': 0},
         *       {'perk': 'Equilibrium', 'cost': 0, 'probability': 0.11297548487631127, 'rank': 0},
         *       {'perk': 'Precise', 'cost': 65, 'probability': 0.00510406494140625, 'rank': 2},
         *       {'perk': 'Flanking', 'cost': 0, 'probability': 0.013885498046875, 'rank': 0}
         *     ]
         *     quicksort(0, (perkArr.length - 1), perkArr, function (x, y) { return x.cost - y.cost })
         **/
        quicksort: function(low, high, arr, compare) {
            var pivot_index = (~~((low + high) / 2)) // floor division
            var pivot_value = arr[pivot_index]
            arr[pivot_index] = arr[high]
            arr[high] = pivot_value
            var counter = low
            var loop_index = low

            while (loop_index < high) {
                if (compare(arr[loop_index], pivot_value) < (loop_index & 1)) {
                    var tmp = arr[loop_index]
                    arr[loop_index] = arr[counter]
                    arr[counter] = tmp
                    counter = counter + 1
                }
                loop_index = loop_index + 1
            }

            arr[high] = arr[counter]
            arr[counter] = pivot_value

            if (low < (counter - 1)) {
                self.quicksort(low, counter - 1, arr, compare)
            }
            if ((counter + 1) < high) {
                self.quicksort(counter + 1, high, arr, compare)
            }
        },

        /**
         * Roughly equivalent to Python's zip function
         **/
        zip: function(arrays) {
            return arrays[0].map(function(_, i) {
                return arrays.map(function(array) {
                    return array[i]
                })
            });
        },

        /**
         * Roughly equivalent to Python's itertools.product function
         **/
        product: function() {
            var args = Array.prototype.slice.call(arguments); // makes array from arguments
            return args.reduce(function tl(accumulator, value) {
                var tmp = [];
                for (var i = 0; i < accumulator.length; i++) {
                    for (var i2 = 0; i2 < value.length; i2++) {
                        tmp.push(accumulator[i].concat(value[i2]));
                    }
                }
                return tmp;
            }, [
                []
            ]);
        },

        _product: function(arr) {
            var p = 1.0
            for (var i = 0; i < arr.length; i++) {
                p *= arr[i]
            }
            return p
        },

        /**
         * Generate the perk probabilities
         **/
        getMaterialsProb: function(invLevel, gizmoType, matsUsed, ancient) {
            var bases = {},
                dices = {},
                order = [];

            // console.log('Running getMaterialsProb')

            for (var i = 0; i < matsUsed.length; i++) {
                var mat = matsUsed[i]
                if (self.data.comps[mat] === undefined) {
                    continue
                }

                for (var i2 = 0; i2 < self.data.comps[mat][gizmoType].length; i2++) {
                    if (order.length >= 20) {
                        continue
                    }
                    var _data = self.data.comps[mat],
                        perk = _data[gizmoType][i2],
                        name = perk.perk

                    var perkBase = perk['base'],
                        perkRoll = perk['roll']

                    if (ancient && _data.ancient !== true) {
                        // this slot is an ancient gizmo slot with a regular mat
                        perkBase = Math.floor(perk['base'] * 0.8)
                        perkRoll = Math.floor(perk['roll'] * 0.8)
                    }

                    if (!bases.hasOwnProperty(name)) {
                        order.push(name)
                        bases[name] = perkBase
                        dices[name] = [perkRoll]
                    } else {
                        bases[name] += perkBase
                        dices[name].push(perkRoll)
                    }
                }
            }
            if (order.length === 0) {
                return {
                    'err': "No materials provided (or the materials selected provide no perks in this gizmo), click/tap/drag the materials above to add some"
                }
            }

            // console.log(bases, dices, order)

            var probabilities = []
            for (var i3 = 0; i3 < order.length; i3++) {
                var perk = order[i3]
                var distribution = self.rollDice(dices[perk], bases[perk])

                var ranks = [0]
                for (var i4 = 0; i4 < self.data.perks[perk]['ranks'].length; i4++) {
                    if (!ancient && self.data.perks[perk]['ranks'][i4]['ancientOnly'] == 1) {
                        continue;
                    }
                    ranks.push(self.data.perks[perk]['ranks'][i4]['threshold'])
                }
                ranks.push(9999)

                var rank = 0
                var probs = []

                var zipRanks = self.zip([ranks.slice(0, -1), ranks.slice(1)])
                // console.log(zipRanks)
                for (var i5 = 0; i5 < zipRanks.length; i5++) {
                    var low = zipRanks[i5][0],
                        high = zipRanks[i5][1]

                    // console.log(low, high)

                    var probability = distribution.slice(low, high)

                    // console.log(probability)
                    probability = probability.reduce(function(a, b) {
                        return a + b
                    }, 0)
                    if (probability > 0) {
                        if (rank > 0) {
                            probs.push({
                                'rank': rank,
                                'probability': probability,
                                'cost': self.data.perks[perk]['ranks'][rank - 1]['cost'],
                                'perk': perk
                            })
                        } else {
                            probs.push({
                                'rank': rank,
                                'probability': probability,
                                'cost': 0,
                                'perk': perk
                            })
                        }
                    }
                    rank += 1
                }
                probabilities.push(probs)
            }

            // console.log('probs ', JSON.stringify(probabilities))

            var toRoll = []
            for (var i6 = 0; i6 < (ancient ? 6 : 5); i6++) { // 5 rolls, 6 for ancient
                toRoll.push(20 + (~~(invLevel / 2))) // floor division
            }
            var contribution = self.rollDice(toRoll, 0)
            contribution[invLevel] += contribution.slice(0, invLevel).reduce(function(a, b) {
                return a + b
            }, 0)

            for (var i7 = 0; i7 < invLevel; i7++) {
                contribution[i7] = 0.0
            }

            // console.log('contribution ', contribution)

            var final = {}
            var combos = self.product.apply(null, probabilities)

            // console.log('combos ', combos)
            var cache = {};
            for (var i8 = 0; i8 < combos.length; i8++) {
                var combo = combos[i8],
                    comboProbs = []

                for (var i9 = 0; i9 < combo.length; i9++) {
                    comboProbs.push(combo[i9]['probability'])
                }

                var combo_probability = self._product(comboProbs)
                self.quicksort(0, (combo.length - 1), combo, function(x, y) {
                    return x.cost - y.cost
                })
                var cache_key = [];
                for (var iterthing = 0; iterthing < combo.length; iterthing++) {
                    cache_key.push(combo[iterthing].cost)
                }
                var inner_probs = cache[cache_key]
                if (inner_probs === undefined) {
                    inner_probs = {};
                    var lowest_contribution = Math.floor((invLevel - 1) / 5) * 5 + 1;
                    var highest_contribution = contribution.length - 1;
                    for (var candidate_contribution_iter = lowest_contribution; candidate_contribution_iter <= highest_contribution; candidate_contribution_iter += 5) {
                        var candidate_contribution = candidate_contribution_iter
                        var contribution_probability = contribution.slice(candidate_contribution, (candidate_contribution + 5)).reduce(function(a, b) {
                            return a + b
                        }, 0)
                        var perk_indexes = []
                        for (var i11 = combo.length - 1; i11 >= 0; i11--) {
                            var perk = combo[i11]
                            if (perk['cost'] == 0) {
                                continue
                            }
                            if (candidate_contribution > perk['cost']) {
                                perk_indexes.push(i11)
                                candidate_contribution -= perk['cost']
                            }
                            if (perk_indexes.length == 2) {
                                break
                            }
                        }

                        if (inner_probs[perk_indexes] === undefined) {
                            inner_probs[perk_indexes] = 0.0;
                        }
                        inner_probs[perk_indexes] += contribution_probability
                    }

                    var tmp_entries = Object.entries(inner_probs);
                    var inner_probs = [];
                    for (var iterthing2 = 0; iterthing2 < tmp_entries.length; iterthing2++) {
                        var perk_indexes_str = tmp_entries[iterthing2][0];
                        var perk_indexes = [];
                        var p = tmp_entries[iterthing2][1];
                        if (perk_indexes_str !== "") {
                            var split = perk_indexes_str.split(",");
                            for (var iterthing3 = 0; iterthing3 < split.length; iterthing3++) {
                                perk_indexes.push(parseInt(split[iterthing3]));
                            }
                        }
                        inner_probs.push([perk_indexes, p])
                    }
                    cache[cache_key] = inner_probs;
                }
                for (var iterthing4 = 0; iterthing4 < inner_probs.length; iterthing4++) {
                    var perk_indexes = inner_probs[iterthing4][0];
                    var p = inner_probs[iterthing4][1];
                    var perks_used = [];
                    var hasdouble = false;
                    for (var iterthing5 = 0; iterthing5 < perk_indexes.length; iterthing5++) {
                        var perk = combo[perk_indexes[iterthing5]];
                        var perkstr = perk.perk;
                        hasdouble = hasdouble || (self.data.perks[perk.perk].doubleslot === true);
                        if (self.data.perks[perk.perk].ranks.length > 1) {
                            perkstr += ' ' + perk.rank
                        }
                        perks_used.push(perkstr);
                    }
                    if (hasdouble) {
                        perks_used = perks_used.slice(0, 1);
                    }

                    if (final[perks_used] === undefined) {
                        final[perks_used] = 0.0;
                    }
                    final[perks_used] += combo_probability * p;
                }
            }

            // console.log('final ', final)

            return final
        }
    }

    mw.loader.using(['ext.gadget.rsw-util', 'ext.gadget.tooltip'], function() {
        $(self.init);
    })

}(jQuery, mediaWiki, rswiki));
// </nowiki>