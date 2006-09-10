/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Media Zoomer.
 *
 * The Initial Developer of the Original Code is
 *      Dave Townsend <dave.townsend@blueprintit.co.uk>.
 *
 * Portions created by the Initial Developer are Copyright (C) 2006
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK *****
 *
 * $HeadURL$
 * $LastChangedBy$
 * $Date$
 * $Revision$
 *
 */

const ZOOM_FACTOR = 1.5;

var current_zoom = 0;

function zoominit(event)
{
	var ref = document.getElementById("imagesaveasbutton");
	
	var xmlns = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
	var button = document.createElementNS(xmlns, "button");
	button.setAttribute("image", "chrome://mediazoomer/skin/icon_minus.png");
	ref.parentNode.insertBefore(button, ref);
	button.addEventListener("command", zoomout, false);
	
	button = document.createElementNS(xmlns, "button");
	button.setAttribute("image", "chrome://mediazoomer/skin/icon_plus.png");
	ref.parentNode.insertBefore(button, ref);
	button.addEventListener("command", zoomin, false);
	
	var tree = document.getElementById("imagetree");
	tree.addEventListener("select", mediaChanged, false);
}

function mediaChanged()
{
	current_zoom = 0;
}

function updateZoom()
{
	var container = document.getElementById("theimagecontainer");
	var image = container.firstChild;
	image.height = image.naturalHeight * Math.pow(ZOOM_FACTOR,current_zoom);
	image.width = image.naturalWidth * Math.pow(ZOOM_FACTOR,current_zoom);
}

function zoomin()
{
	current_zoom++;
	updateZoom();
}

function zoomout()
{
	current_zoom--;
	updateZoom();
}

window.addEventListener("load", zoominit, false);
 